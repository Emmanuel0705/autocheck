"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const controller_1 = tslib_1.__importDefault(require("./controller"));
const service_1 = tslib_1.__importDefault(require("./service"));
const harkerNews_1 = tslib_1.__importDefault(require("../../services/harkerNews"));
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [],
        controllers: [controller_1.default],
        providers: [service_1.default, harkerNews_1.default],
    })
], AppModule);
exports.default = AppModule;
//# sourceMappingURL=module.js.map