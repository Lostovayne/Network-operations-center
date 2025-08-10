import { LogEntity, LogSeverityLevel } from "@domain/entities/log.entity";
import { LogRepository } from "@domain/repository/log.repository";
import { envs } from "config/plugins/envs.plugin";
import * as nodemailer from "nodemailer";

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachements?: Attachement[];
}

interface Attachement {
  filename: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  constructor() {}

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachements = [] } = options;

    try {
      const sendInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachements,
      });
      console.log("Email sent successfully:", sendInformation);
      return true;
    } catch (error: unknown) {
      // Log the error and return false
      console.error("Error sending email:", error);
      return false;
    }
  }

  async sendEmailWithFileSystemLog(to: string | string[]) {
    const subject = "Test Email with File System Log";
    const htmlBody = "<h1>Hello, this is a test email with file system log!</h1>";
    const attachements: Attachement[] = [
      {
        filename: "logs-all.log",
        path: "./logs/logs-all.log", // Adjust the path to your log file
      },
    ];

    return this.sendEmail({ to, subject, htmlBody, attachements });
  }
}
