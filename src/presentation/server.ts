// import "dotenv/config";
import { FileSystemDataSource } from "@infrastructure/datasources/file-system.datasource";
import { ILogRepository } from "@infrastructure/repository/log.repository.impl";
import { EmailService } from "./email/email.service";
import { SendEmailLogs } from "@domain/use-cases/email/send-email-logs";

// -> IRepository -> IDataSource
const fileSystemDataSource = new FileSystemDataSource();
const fileSystemLogRepository = new ILogRepository(fileSystemDataSource);

const SuccessCallback = () => console.log(`${new Date()} - OK`);
const ErrorCallback = (error: string) => console.log(`${new Date()} - ${error}`);

const emailService = new EmailService();

export class Server {
  public static start() {
    console.log("Server started...");
    // Call my UseCase
    // new SendEmailLogs(emailService, fileSystemLogRepository).execute("epsaind@gmail.com");

    //TODO: Uncomment the following lines to test email sending functionality
    // emailService.sendEmail({
    //   to: "epsaind@gmail.com",
    //   subject: "Test Email",
    //   htmlBody: "<h1>Hello, this is a test email!</h1>",
    // });

    // TODO: Enable this when you want to test sending an email with a file system log attachment
    // emailService.sendEmailWithFileSystemLog("epsaind@gmail.com");

    // CronService.createJob("*/5 * * * * *", async () => {
    //   // Dependency Injection DataSource
    //   const checkService = new CheckServiceUC(
    //     fileSystemLogRepository,
    //     SuccessCallback,
    //     ErrorCallback
    //   );
    //   await checkService.execute("https://www.google.com");
    // });
  }
}
