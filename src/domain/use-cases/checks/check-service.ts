import { LogEntity, LogSeverityLevel } from "@domain/entities/log.entity";
import { LogRepository } from "@domain/repository/log.repository";

interface CheckServiceInterface {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void | undefined;
type ErrorCallback = (error: string) => void | undefined;

export class CheckServiceUC implements CheckServiceInterface {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

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
      this.logRepository.saveLog(logEntity);
      this.successCallback();
      return true;
    } catch (error) {
      const logEntity = new LogEntity({
        origin: "CheckServiceUC",
        message: `Error on check service ${url}: ${error}`,
        level: LogSeverityLevel.high,
        createdAt: new Date(),
      });
      this.logRepository.saveLog(logEntity);
      this.errorCallback(`${error}`);
      return false;
    }
  }
}
