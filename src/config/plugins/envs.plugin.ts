import "dotenv/config";
import * as envVar from "env-var";

// Compatibility shim: support both CJS and ESM builds of env-var
const env = (envVar as unknown as { default?: typeof envVar } & typeof envVar).default ?? envVar;

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  MAILER_EMAIL: env.get("MAILER_EMAIL").required().asString(),
  MAILER_SECRET_KEY: env.get("MAILER_SECRET_KEY").required().asString(),
  MAILER_SERVICE: env.get("MAILER_SERVICE").required().asString(),
  MONGO_URL: env.get("MONGO_URL").required().asString(),
  MONGO_DB_NAME: env.get("MONGO_DB_NAME").required().asString(),
};
