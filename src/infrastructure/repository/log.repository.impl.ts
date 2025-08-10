import { LogDatasource } from "@domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "@domain/entities/log.entity";
import { LogRepository } from "@domain/repository/log.repository";

export class ILogRepository implements LogRepository {
  // LogDatasource is Dependency Inyection
  constructor(private readonly logDataSource: LogDatasource) {}

  async saveLog(log: LogEntity): Promise<void> {
    return this.logDataSource.saveLog(log);
  }

  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    return this.logDataSource.getLogs(severityLevel);
  }
}
