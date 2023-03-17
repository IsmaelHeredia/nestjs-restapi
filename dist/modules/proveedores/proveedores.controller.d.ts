/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ProveedoresService } from './proveedores.service';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
export declare class ProveedoresController {
    private readonly proveedoresService;
    constructor(proveedoresService: ProveedoresService);
    create(createProveedorDto: CreateProveedoreDto): Promise<import("./entities/proveedor.entity").Proveedor>;
    findAll(): Promise<import("./entities/proveedor.entity").Proveedor[]>;
    findOne(id: string): Promise<import("./entities/proveedor.entity").Proveedor>;
    update(id: string, updateProveedorDto: UpdateProveedoreDto): Promise<import("./entities/proveedor.entity").Proveedor>;
    remove(id: string): Promise<import("mongoose").Document<unknown, any, import("./entities/proveedor.entity").ProveedorDocument> & import("./entities/proveedor.entity").Proveedor & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
