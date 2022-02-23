"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPassCodeDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class GetPassCodeDto {
    code;
}
tslib_1.__decorate([
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], GetPassCodeDto.prototype, "code", void 0);
exports.GetPassCodeDto = GetPassCodeDto;
//# sourceMappingURL=dto.js.map