import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { Proveedor, ProveedorDocument } from './entities/proveedor.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProveedoresService {

  constructor( 
    @InjectModel(Proveedor.name) private readonly proveedorModel: Model<ProveedorDocument>, 
  ) {}

  async create(createProveedorDto: CreateProveedoreDto): Promise<Proveedor> { 
    const { fecha_registro, ...Proveedor } = createProveedorDto;
    const proveedor_datos = {
      ...Proveedor,
      fecha_registro : new Date().toJSON().slice(0, 10)
    };
    return this.proveedorModel.create(proveedor_datos); 
  }

  async findAll(): Promise<Proveedor[]> { 
    return this.proveedorModel.find().exec();
  }

  async findOne(id: string): Promise<Proveedor> { 
    return this.proveedorModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateProveedorDto: UpdateProveedoreDto): Promise<Proveedor> { 
    const { fecha_registro, ...Proveedor } = updateProveedorDto;
    const proveedor_datos = {
      ...Proveedor,
      fecha_registro : new Date().toJSON().slice(0, 10)
    };
    return this.proveedorModel.findOneAndUpdate({ _id: id }, proveedor_datos, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.proveedorModel.findByIdAndRemove({ _id: id }).exec(); 
  }

}
