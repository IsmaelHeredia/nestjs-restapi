"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccesoModule = void 0;
const common_1 = require("@nestjs/common");
const acceso_service_1 = require("./acceso.service");
const acceso_controller_1 = require("./acceso.controller");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const jwtConstants_1 = require("./jwtConstants");
let AccesoModule = class AccesoModule {
};
AccesoModule = __decorate([
    (0, common_1.Module)({
        controllers: [acceso_controller_1.AccesoController],
        providers: [acceso_service_1.AccesoService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: usuario_entity_1.Usuario.name,
                    schema: usuario_entity_1.Usuario,
                },
            ]),
            jwt_1.JwtModule.register({
                secret: jwtConstants_1.jwtConstants.secret,
                signOptions: { expiresIn: '20h' }
            })
        ]
    })
], AccesoModule);
exports.AccesoModule = AccesoModule;
//# sourceMappingURL=acceso.module.js.map