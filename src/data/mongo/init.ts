import mongoose from "mongoose";

interface ConnectionOptions {
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: ConnectionOptions) {
    const { mongoUrl, dbName } = options;
    if (!mongoUrl || !dbName) {
      throw new Error("MongoDB connection options are not properly configured.");
    }

    try {
      await mongoose.connect(mongoUrl, {
        dbName: dbName,
      });
      return true;
    } catch (error) {
      throw new Error("Failed to connect to MongoDB.");
    }
  }
}
