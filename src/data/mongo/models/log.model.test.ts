import { envs } from "@config/plugins/envs.plugin";
import mongoose from "mongoose";
import { MongoDatabase } from "../init";
import { LogModel } from "./log.model";

describe("log.model.test.ts", () => {
  beforeAll(async () => {
    await MongoDatabase.connect({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME,
    });
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  test("should return a log Model", async () => {
    const logData = {
      origin: "test",
      message: "This is a test log",
      level: "low",
    };
    const log = await LogModel.create(logData);
    expect(log).toHaveProperty("_id");
    expect(log).toEqual(
      expect.objectContaining({ ...logData, createdAt: expect.any(Date), id: expect.any(String) })
    );
  });
});
