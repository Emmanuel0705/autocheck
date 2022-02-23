"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const module_1 = tslib_1.__importDefault(require("./app/module"));
let Modules = class Modules {
};
Modules = tslib_1.__decorate([
    common_1.Module({
        imports: [module_1.default],
    })
], Modules);
exports.default = Modules;
//# sourceMappingURL=index.js.map