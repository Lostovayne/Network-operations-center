import mongoose from "mongoose";
import { MongoDatabase } from "./init";

describe("init test.ts", () => {
  afterAll(async () => {
    mongoose.connection.close(); // Close the connection
  });

  test("should connect to mongoDB", async () => {
    const connected = await MongoDatabase.connect({
      dbName: process.env.MONGO_DB_NAME!,
      mongoUrl: process.env.MONGO_URL!,
    });

    expect(connected).toBeTruthy();
  });

  test("should throw an error", async () => {
    try {
      const connected = await MongoDatabase.connect({
        dbName: "XXXX",
        mongoUrl: "mongodb://localhost:27017",
      });
      expect(connected).toBeTruthy();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
