import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';

@Module({
  
  //con esta linea se actualiza en la base de datos
  imports: [TypeOrmModule.forFeature([Producto,DetalleVenta])],
  
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService]
})
export class ProductosModule {}
