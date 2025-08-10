"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var file_system_datasource_1 = require("@infrastructure/datasources/file-system.datasource");
var mongo_db_datasource_1 = require("@infrastructure/datasources/mongo-db.datasource");
var postgres_db_datasource_1 = require("@infrastructure/datasources/postgres-db.datasource");
var log_repository_impl_1 = require("@infrastructure/repository/log.repository.impl");
var cron_service_1 = require("./cron/cron-service");
var email_service_1 = require("./email/email.service");
var check_service_multiple_1 = require("@domain/use-cases/checks/check-service-multiple");
// -> IRepository -> IDataSource
var fileSystemDataSource = new file_system_datasource_1.FileSystemDataSource(); // File System Data Source
var mongoLogDatasource = new mongo_db_datasource_1.MongoLogDatasource(); // MongoDB Data Source
var postgresLogDatasource = new postgres_db_datasource_1.PostgresLogDatasource(); // Postgres Data Source
var logRepository = new log_repository_impl_1.ILogRepository(
// fileSystemDataSource,
// mongoLogDatasource
postgresLogDatasource);
//  Multiples Repositories
var logRepositories = [
    new log_repository_impl_1.ILogRepository(fileSystemDataSource),
    new log_repository_impl_1.ILogRepository(mongoLogDatasource),
    new log_repository_impl_1.ILogRepository(postgresLogDatasource),
];
var SuccessCallback = function () { return console.log("".concat(new Date(), " - OK")); };
var ErrorCallback = function (error) { return console.log("".concat(new Date(), " - ").concat(error)); };
var emailService = new email_service_1.EmailService();
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.start = function () {
        var _this = this;
        console.log("Server started...");
        // Call my UseCase
        // new SendEmailLogs(emailService, logRepository).execute("epsaind@gmail.com");
        //TODO: Uncomment the following lines to test email sending functionality
        // emailService.sendEmail({
        //   to: "epsaind@gmail.com",
        //   subject: "Test Email",
        //   htmlBody: "<h1>Hello, this is a test email!</h1>",
        // });
        // TODO: Enable this when you want to test sending an email with a file system log attachment
        // emailService.sendEmailWithFileSystemLog("epsaind@gmail.com");
        cron_service_1.CronService.createJob("*/5 * * * * *", function () { return __awaiter(_this, void 0, void 0, function () {
            var checkService;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        checkService = new check_service_multiple_1.CheckServiceMultipleUC(logRepositories, SuccessCallback, ErrorCallback);
                        return [4 /*yield*/, checkService.execute("https://www.google.com")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Server;
}());
exports.Server = Server;
