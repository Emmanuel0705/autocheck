"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const service_1 = tslib_1.__importDefault(require("./service"));
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    async getFirst() {
        return await this.appService.getTenMostOccuringTitle();
    }
    async Seconnd() {
        return await this.appService.getLastWeekMostOccuringWords();
    }
    async getNodes() {
        return await this.appService.getTenMostOccuringTitle();
    }
};
tslib_1.__decorate([
    common_1.Get("top-ten-words"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getFirst", null);
tslib_1.__decorate([
    common_1.Get("ttw-last-week"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "Seconnd", null);
tslib_1.__decorate([
    common_1.Get("ttw-user-karma"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppController.prototype, "getNodes", null);
AppController = tslib_1.__decorate([
    common_1.Controller("api"),
    tslib_1.__metadata("design:paramtypes", [service_1.default])
], AppController);
exports.default = AppController;
//# sourceMappingURL=controller.js.map