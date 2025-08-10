"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
var cron_1 = require("cron");
var CronService = /** @class */ (function () {
    function CronService() {
    }
    CronService.createJob = function (cronTime, onTick) {
        var job = new cron_1.CronJob(cronTime, onTick);
        job.start();
        return job;
    };
    return CronService;
}());
exports.CronService = CronService;
