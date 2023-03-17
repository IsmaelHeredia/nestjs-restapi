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
import { TiposUsuarioService } from './tiposusuarios.service';
import { CreateTiposUsuarioDto } from './dto/create-tiposusuario.dto';
import { UpdateTiposUsuarioDto } from './dto/update-tiposusuario.dto';
export declare class TiposUsuarioController {
    private readonly tiposUsuarioService;
    constructor(tiposUsuarioService: TiposUsuarioService);
    create(createTipoUsuarioDto: CreateTiposUsuarioDto): Promise<import("./entities/tiposusuario.entity").TiposUsuario>;
    findAll(): Promise<import("./entities/tiposusuario.entity").TiposUsuario[]>;
    findOne(id: string): Promise<import("./entities/tiposusuario.entity").TiposUsuario>;
    update(id: string, updateTipoUsuarioDto: UpdateTiposUsuarioDto): Promise<import("./entities/tiposusuario.entity").TiposUsuario>;
    remove(id: string): Promise<import("mongoose").Document<unknown, any, import("./entities/tiposusuario.entity").TiposUsuarioDocument> & import("./entities/tiposusuario.entity").TiposUsuario & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
