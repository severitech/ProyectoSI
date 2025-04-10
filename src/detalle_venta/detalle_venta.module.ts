import { Module } from '@nestjs/common';
import { DetalleVentaService } from './detalle_venta.service';
import { DetalleVentaController } from './detalle_venta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from 'src/productos/entities/producto.entity';
import { DetalleVenta } from './entities/detalle_venta.entity';
import { Venta } from 'src/venta/entities/venta.entity';
import { ProductosModule } from 'src/productos/productos.module';
import { VentaModule } from 'src/venta/venta.module';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleVenta,Producto,Venta]),ProductosModule, VentaModule],
  controllers: [DetalleVentaController],
  providers: [DetalleVentaService],
})
export class DetalleVentaModule {}
