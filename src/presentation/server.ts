// import "dotenv/config";
import { CheckServiceUC } from "@domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "@infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "@infrastructure/datasources/mongo-db.datasource";
import { PostgresLogDatasource } from "@infrastructure/datasources/postgres-db.datasource";
import { ILogRepository } from "@infrastructure/repository/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";
import { CheckServiceMultipleUC } from "@domain/use-cases/checks/check-service-multiple";

// -> IRepository -> IDataSource
const fileSystemDataSource = new FileSystemDataSource(); // File System Data Source
const mongoLogDatasource = new MongoLogDatasource(); // MongoDB Data Source
const postgresLogDatasource = new PostgresLogDatasource(); // Postgres Data Source

const logRepository = new ILogRepository(
  // fileSystemDataSource,
  // mongoLogDatasource
  postgresLogDatasource
);

//  Multiples Repositories
const logRepositories = [
  new ILogRepository(fileSystemDataSource),
  new ILogRepository(mongoLogDatasource),
  new ILogRepository(postgresLogDatasource),
];

const SuccessCallback = () => console.log(`${new Date()} - OK`);
const ErrorCallback = (error: string) => console.log(`${new Date()} - ${error}`);

const emailService = new EmailService();

export class Server {
  public static start() {
    console.log("Server started...");
    // Call my UseCase
    // new SendEmailLogs(emailService, logRepository).execute("epsaind@gmail.com");

    //TODO: Uncomment the following lines to test email sending functionality
    // emailService.sendEmail({
    //   to: "epsaind@gmail.com",
    //   subject: "Test Email",
    //   htmlBody: "<h1>Hello, this is a test email!</h1>",
    // });

    // TODO: Enable this when you want to test sending an email with a file system log attachment
    // emailService.sendEmailWithFileSystemLog("epsaind@gmail.com");

    CronService.createJob("*/5 * * * * *", async () => {
      // Dependency Injection DataSource
      // const checkService = new CheckServiceUC(logRepository, SuccessCallback, ErrorCallback);
      const checkService = new CheckServiceMultipleUC(
        logRepositories,
        SuccessCallback,
        ErrorCallback
      );
      await checkService.execute("https://www.google.com");
    });
  }
}
