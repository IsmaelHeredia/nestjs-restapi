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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const producto_entity_1 = require("./entities/producto.entity");
const mongoose_2 = require("mongoose");
let ProductosService = class ProductosService {
    constructor(productoModel) {
        this.productoModel = productoModel;
    }
    async create(createProductoDto) {
        const { fecha_registro } = createProductoDto, Producto = __rest(createProductoDto, ["fecha_registro"]);
        const producto_datos = Object.assign(Object.assign({}, Producto), { fecha_registro: new Date().toJSON().slice(0, 10) });
        return this.productoModel.create(producto_datos);
    }
    async findAll() {
        return this.productoModel.find().exec();
    }
    async findOne(id) {
        return this.productoModel.findOne({ _id: id }).exec();
    }
    async update(id, updateProductoDto) {
        const { fecha_registro } = updateProductoDto, Producto = __rest(updateProductoDto, ["fecha_registro"]);
        const producto_datos = Object.assign(Object.assign({}, Producto), { fecha_registro: new Date().toJSON().slice(0, 10) });
        return this.productoModel.findOneAndUpdate({ _id: id }, producto_datos, {
            new: true,
        });
    }
    async remove(id) {
        return this.productoModel.findByIdAndRemove({ _id: id }).exec();
    }
};
ProductosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(producto_entity_1.Producto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductosService);
exports.ProductosService = ProductosService;
//# sourceMappingURL=productos.service.js.map