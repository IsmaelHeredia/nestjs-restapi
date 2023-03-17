import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto, ProductoDocument } from './entities/producto.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductosService {

  constructor( 
    @InjectModel(Producto.name) private readonly productoModel: Model<ProductoDocument>, 
  ) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> { 
    const { fecha_registro, ...Producto } = createProductoDto;
    const producto_datos = {
      ...Producto,
      fecha_registro : new Date().toJSON().slice(0, 10)
    };
    return this.productoModel.create(producto_datos); 
  }

  async findAll(): Promise<Producto[]> { 
    return this.productoModel.find().exec();
  }

  async findOne(id: string): Promise<Producto> { 
    return this.productoModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto> { 
    const { fecha_registro, ...Producto } = updateProductoDto;
    const producto_datos = {
      ...Producto,
      fecha_registro : new Date().toJSON().slice(0, 10)
    };
    return this.productoModel.findOneAndUpdate({ _id: id }, producto_datos, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.productoModel.findByIdAndRemove({ _id: id }).exec(); 
  }

}
