import { LogDatasource } from "@domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "@domain/entities/log.entity";
import * as fs from "fs";

export class FileSystemDataSource implements LogDatasource {
  private readonly logPath = "logs/";
  private readonly allLogsPath = "logs/logs-all.log";
  private readonly mediumLogsPath = "logs/logs-medium.log";
  private readonly highLogsPath = "logs/logs-high.log";

  constructor() {
    this.createLogFile();
  }

  private createLogFile(): void {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath, { recursive: true });
    }

    [this.allLogsPath, this.mediumLogsPath, this.highLogsPath].forEach((path) => {
      if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "");
      }
    });
  }

  async saveLog(newLog: LogEntity): Promise<void> {
    fs.appendFileSync(this.allLogsPath, `${JSON.stringify(newLog)}\n`);
    if (newLog.level === LogSeverityLevel.low) return;

    if (newLog.level === LogSeverityLevel.medium) {
      fs.appendFileSync(this.mediumLogsPath, `${JSON.stringify(newLog)}\n`);
    } else {
      fs.appendFileSync(this.highLogsPath, `${JSON.stringify(newLog)}\n`);
    }
  }

  private getLogsFromFile = (path: string): LogEntity[] => {
    const content = fs.readFileSync(path, "utf-8");
    if (content === "") return [];
    const logs = content.split("\n").map(LogEntity.fromJson);
    return logs;
  };

  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    switch (severityLevel) {
      case LogSeverityLevel.low:
        return this.getLogsFromFile(this.allLogsPath);
      case LogSeverityLevel.medium:
        return this.getLogsFromFile(this.mediumLogsPath);
      case LogSeverityLevel.high:
        return this.getLogsFromFile(this.highLogsPath);
      default:
        throw new Error(`${severityLevel} not implemented`);
    }
  }
}
