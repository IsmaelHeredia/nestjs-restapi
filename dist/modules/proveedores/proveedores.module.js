"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProveedoresModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const proveedores_service_1 = require("./proveedores.service");
const proveedores_controller_1 = require("./proveedores.controller");
const proveedor_entity_1 = require("./entities/proveedor.entity");
let ProveedoresModule = class ProveedoresModule {
};
ProveedoresModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: proveedor_entity_1.Proveedor.name, schema: proveedor_entity_1.ProveedorSchema }]),
        ],
        controllers: [proveedores_controller_1.ProveedoresController],
        providers: [proveedores_service_1.ProveedoresService]
    })
], ProveedoresModule);
exports.ProveedoresModule = ProveedoresModule;
//# sourceMappingURL=proveedores.module.js.map