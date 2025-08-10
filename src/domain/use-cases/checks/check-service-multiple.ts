import { LogEntity, LogSeverityLevel } from "@domain/entities/log.entity";
import { LogRepository } from "@domain/repository/log.repository";

interface CheckServiceMultipleInterface {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void | undefined;
type ErrorCallback = (error: string) => void | undefined;

export class CheckServiceMultipleUC implements CheckServiceMultipleInterface {
  constructor(
    private readonly logRepository: LogRepository[],
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  private callLogsRepositories(logEntity: LogEntity) {
    this.logRepository.forEach((logRepository) => logRepository.saveLog(logEntity));
  }

  async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) throw new Error(`Error on check service ${url}`);
      const logEntity = new LogEntity({
        origin: "CheckServiceUC",
        message: `Service ${url} is working correctly`,
        level: LogSeverityLevel.low,
        createdAt: new Date(),
      });
      this.callLogsRepositories(logEntity);
      this.successCallback();
      return true;
    } catch (error) {
      const logEntity = new LogEntity({
        origin: "CheckServiceUC",
        message: `Error on check service ${url}: ${error}`,
        level: LogSeverityLevel.high,
        createdAt: new Date(),
      });
      this.callLogsRepositories(logEntity);
      this.errorCallback(`${error}`);
      return false;
    }
  }
}
