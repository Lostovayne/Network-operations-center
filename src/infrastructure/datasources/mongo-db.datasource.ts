import { LogDatasource } from "@domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "@domain/entities/log.entity";
import { LogModel } from "data/mongo/models/log.model";

export class MongoLogDatasource implements LogDatasource {
  async saveLog(log: LogEntity): Promise<void> {
    const newLog = await (await LogModel.create(log)).save();
    console.log("MongoLogDatasource: Log saved", newLog.id);
  }
  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const logs = await LogModel.find({ level: severityLevel });
    return logs.map((mongoLog) => LogEntity.fromObject(mongoLog));
  }
}
