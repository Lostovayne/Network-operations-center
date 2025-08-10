import { LogEntity, LogSeverityLevel } from "@domain/entities/log.entity";
import { ILogRepository } from "@infrastructure/repository/log.repository.impl";
import { EmailService } from "@presentation/email/email.service";

interface SendEmailUseCase {
  execute: (to: string | string[]) => Promise<boolean>;
}

export class SendEmailLogs implements SendEmailUseCase {
  constructor(
    private readonly emailService: EmailService,
    private readonly logRepository: ILogRepository
  ) {}

  async execute(to: string | string[]): Promise<boolean> {
    try {
      const sent = await this.emailService.sendEmailWithFileSystemLog(to);
      if (!sent) {
        throw new Error("Failed to send email with logs.");
      }
      const log = new LogEntity({
        level: LogSeverityLevel.low,
        message: `Email logs sent successfully to ${Array.isArray(to) ? to.join(", ") : to}`,
        origin: "SendEmailLogs",
      });
      this.logRepository.saveLog(log);
      return true;
    } catch (error) {
      const log = new LogEntity({
        level: LogSeverityLevel.high,
        message: `Error sending email logs: ${
          error instanceof Error ? error.message : String(error)
        }`,
        origin: "SendEmailLogs",
      });
      this.logRepository.saveLog(log);
      return false;
    }
  }
}
