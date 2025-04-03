import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';

@Module({
  
  //con esta linea se actualiza en la base de datos
  imports: [TypeOrmModule.forFeature([Producto])],
  
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
