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
exports.AccesoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
var bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
require("dotenv").config();
let AccesoService = class AccesoService {
    constructor(usuarioModel, jwtService) {
        this.usuarioModel = usuarioModel;
        this.jwtService = jwtService;
    }
    async ingreso(userLoginBody) {
        const { clave } = userLoginBody;
        const usuario = await this.usuarioModel.findOne({
            nombre: userLoginBody.nombre,
        });
        if (!usuario)
            throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        if (bcrypt.compareSync(clave, usuario.clave)) {
            const payload = {
                id: usuario._id,
                usuario: usuario.nombre,
                tipo: usuario.tipo
            };
            const token = this.jwtService.sign(payload);
            const usuarioContenido = usuario.toObject();
            const informacion = {
                token,
                usuario: usuarioContenido,
            };
            return informacion;
        }
        else {
            throw new common_1.HttpException('PASSWORD_INVALID', common_1.HttpStatus.CONFLICT);
        }
    }
};
AccesoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(usuario_entity_1.Usuario.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AccesoService);
exports.AccesoService = AccesoService;
//# sourceMappingURL=acceso.service.js.map