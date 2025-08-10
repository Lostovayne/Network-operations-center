import { MongoDatabase } from "data/mongo/init";
import { Server } from "./presentation/server";
import { envs } from "config/plugins/envs.plugin";
import { LogModel } from "data/mongo/models/log.model";

(async () => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  Server.start();
}
