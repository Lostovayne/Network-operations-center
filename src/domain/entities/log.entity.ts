export enum LogSeverityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface LogEntityOptions {
  level: LogSeverityLevel;
  message: string;
  origin: string;
  createdAt?: Date;
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public origin: string;
  public createdAt: Date;

  constructor({ level, message, origin, createdAt = new Date() }: LogEntityOptions) {
    this.level = level;
    this.message = message;
    this.origin = origin;
    this.createdAt = createdAt;
  }

  /**
   * Creates a LogEntity instance from a JSON string representation.
   *
   * @param json - The JSON string containing the log data with message, level, and createdAt properties
   * @returns A new LogEntity instance with the data from the JSON string
   *
   * @example
   * ```typescript
   * const jsonString = '{"message":"Test log","level":"high","createdAt":"2023-01-01T00:00:00.000Z"}';
   * const logEntity = LogEntity.fromJson(jsonString);
   * ```
   */
  static fromJson(json: string): LogEntity {
    const { message, level, createdAt, origin } = JSON.parse(json);
    const log = new LogEntity({ message, level, createdAt, origin });
    log.createdAt = new Date(createdAt);
    return log;
  }

  static fromObject = (object: Record<string, any>): LogEntity => {
    const { message, origin, level, createdAt } = object;
    return new LogEntity({
      message,
      origin,
      level: level as LogSeverityLevel,
      createdAt: createdAt ? new Date(createdAt) : new Date(),
    });
  };
}
