"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiposUsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const tiposusuarios_service_1 = require("./tiposusuarios.service");
const tiposusuarios_controller_1 = require("./tiposusuarios.controller");
const tiposusuario_entity_1 = require("./entities/tiposusuario.entity");
let TiposUsuarioModule = class TiposUsuarioModule {
};
TiposUsuarioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: tiposusuario_entity_1.TiposUsuario.name, schema: tiposusuario_entity_1.TiposUsuarioSchema }]),
        ],
        controllers: [tiposusuarios_controller_1.TiposUsuarioController],
        providers: [tiposusuarios_service_1.TiposUsuarioService]
    })
], TiposUsuarioModule);
exports.TiposUsuarioModule = TiposUsuarioModule;
//# sourceMappingURL=tiposusuarios.module.js.map