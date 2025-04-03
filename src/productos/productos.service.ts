import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}
  async create(createProductoDto: CreateProductoDto) {
    try {
      const producto = this.productoRepository.create(createProductoDto);
      //con esto se guarda en la base de datos
      return await this.productoRepository.save(producto);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        // Verificamos si el error es por clave única duplicada
        if (error.message.includes('Duplicate entry')) {
          throw new BadRequestException({
            statusCode: 400,
            message: `El producto '${createProductoDto.nombre}' ya existe.`,
            error: 'DuplicateEntry',
          });
        }
      }
      throw new BadRequestException({
        statusCode: 500,
        message: 'Error interno en el servidor',
        error: 'InternalServerError',
      });
    }
  }
  async findAll() {
    return await this.productoRepository.createQueryBuilder('producto')
      .leftJoinAndSelect('producto.categoria', 'categoria')  // Realiza el JOIN con la tabla 'categoria'
      .addSelect(['categoria.categoria'])  // Selecciona solo el campo 'categoria' de la entidad 'Categoria'
      .getMany();
  }
  
  async findOne(id: number) {
    return await this.productoRepository.findOneBy({ id });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    return await this.productoRepository.update(id, updateProductoDto);
  }

  async remove(id: number) {
    return this.productoRepository.softDelete(id);
  }
}
