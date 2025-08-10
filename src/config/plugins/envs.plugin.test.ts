import { envs } from "./envs.plugin";

describe("envs.plugins.test", () => {
  test("should return env options ", () => {
    expect(envs).toEqual({
      PORT: 3000,
      MAILER_EMAIL: "@gmail.com",
      MAILER_SECRET_KEY: "1231312123",
      MAILER_SERVICE: "gmail",
      MONGO_URL: "mongodb://root:example@localhost:27017",
      MONGO_DB_NAME: "NOC-TEST",
    });
  });

  test("should return error if not found env", async () => {
    jest.resetModules(); // asegurarse de que los modulos esten reseteados

    process.env.PORT = "ABC";

    try {
      await import("./envs.plugin");
      expect(true).toBe(false);
    } catch (error) {
      expect(`${error}`).toContain('EnvVarError: env-var: "PORT" should be a valid integer');
    }
  });
});
