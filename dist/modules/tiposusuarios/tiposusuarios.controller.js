"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposUsuarioController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tiposusuarios_service_1 = require("./tiposusuarios.service");
const create_tiposusuario_dto_1 = require("./dto/create-tiposusuario.dto");
const update_tiposusuario_dto_1 = require("./dto/update-tiposusuario.dto");
let TiposUsuarioController = class TiposUsuarioController {
    constructor(tiposUsuarioService) {
        this.tiposUsuarioService = tiposUsuarioService;
    }
    create(createTipoUsuarioDto) {
        return this.tiposUsuarioService.create(createTipoUsuarioDto);
    }
    findAll() {
        return this.tiposUsuarioService.findAll();
    }
    findOne(id) {
        return this.tiposUsuarioService.findOne(id);
    }
    update(id, updateTipoUsuarioDto) {
        return this.tiposUsuarioService.update(id, updateTipoUsuarioDto);
    }
    remove(id) {
        return this.tiposUsuarioService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tiposusuario_dto_1.CreateTiposUsuarioDto]),
    __metadata("design:returntype", void 0)
], TiposUsuarioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TiposUsuarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposUsuarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tiposusuario_dto_1.UpdateTiposUsuarioDto]),
    __metadata("design:returntype", void 0)
], TiposUsuarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TiposUsuarioController.prototype, "remove", null);
TiposUsuarioController = __decorate([
    (0, common_1.Controller)('tiposusuario'),
    (0, swagger_1.ApiTags)('tipousuario'),
    __metadata("design:paramtypes", [tiposusuarios_service_1.TiposUsuarioService])
], TiposUsuarioController);
exports.TiposUsuarioController = TiposUsuarioController;
//# sourceMappingURL=tiposusuarios.controller.js.map