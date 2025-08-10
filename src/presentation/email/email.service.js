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
exports.EmailService = void 0;
var envs_plugin_1 = require("config/plugins/envs.plugin");
var nodemailer = require("nodemailer");
var EmailService = /** @class */ (function () {
    function EmailService() {
        this.transporter = nodemailer.createTransport({
            service: envs_plugin_1.envs.MAILER_SERVICE,
            auth: {
                user: envs_plugin_1.envs.MAILER_EMAIL,
                pass: envs_plugin_1.envs.MAILER_SECRET_KEY,
            },
        });
    }
    EmailService.prototype.sendEmail = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var to, subject, htmlBody, _a, attachements, sendInformation, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        to = options.to, subject = options.subject, htmlBody = options.htmlBody, _a = options.attachements, attachements = _a === void 0 ? [] : _a;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.transporter.sendMail({
                                to: to,
                                subject: subject,
                                html: htmlBody,
                                attachments: attachements,
                            })];
                    case 2:
                        sendInformation = _b.sent();
                        console.log("Email sent successfully:", sendInformation);
                        return [2 /*return*/, true];
                    case 3:
                        error_1 = _b.sent();
                        // Log the error and return false
                        console.error("Error sending email:", error_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmailService.prototype.sendEmailWithFileSystemLog = function (to) {
        return __awaiter(this, void 0, void 0, function () {
            var subject, htmlBody, attachements;
            return __generator(this, function (_a) {
                subject = "Test Email with File System Log";
                htmlBody = "<h1>Hello, this is a test email with file system log!</h1>";
                attachements = [
                    {
                        filename: "logs-all.log",
                        path: "./logs/logs-all.log", // Adjust the path to your log file
                    },
                ];
                return [2 /*return*/, this.sendEmail({ to: to, subject: subject, htmlBody: htmlBody, attachements: attachements })];
            });
        });
    };
    return EmailService;
}());
exports.EmailService = EmailService;
