import { Injectable } from '@nestjs/common';
import { CreateDetalleVentaDto } from './dto/create-detalle_venta.dto';
import { UpdateDetalleVentaDto } from './dto/update-detalle_venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleVenta } from './entities/detalle_venta.entity';
import { DataSource, Repository } from 'typeorm';
import { Venta } from 'src/venta/entities/venta.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Injectable()
export class DetalleVentaService {
  constructor(
    @InjectRepository(DetalleVenta) private detalleventaRepository: Repository<DetalleVenta>,
    @InjectRepository(Venta) private ventaRepository: Repository<Venta>, // Asegúrate de que se inyecta correctamente 
    @InjectRepository(Producto) private productoRepository: Repository<Producto>, // Asegúrate de que se inyecta correctamente
    private datasource: DataSource
  ) { }

  async create(createDetalleVentaDto: CreateDetalleVentaDto) {
    const venta_producto = await this.ventaRepository.findOne({ where: { nro: createDetalleVentaDto.venta } });
    if (!venta_producto) {
      throw new Error('Venta no encontrada');
    }

    const producto = await this.productoRepository.findOne({ where: { id: createDetalleVentaDto.producto } });
    if (!producto) {
      throw new Error('Producto no encontrado');
    }

    const detalleventa = await this.detalleventaRepository.create({
      ...createDetalleVentaDto,
      producto: producto,
      venta: venta_producto,
      subtotal: createDetalleVentaDto.cantidad * producto.precio, // Asumiendo que tienes un campo precio en Producto
    });
    console.log(detalleventa);
    // return await this.detalleventaRepository.save(detalleventa);
  }

  async findAll() {
    return this.detalleventaRepository.find()
  }

  async findByVenta(venta: number) {
    return await  this.datasource.query('CALL MOSTRAR_PRODUCTOS_DE_UNA_VENTA(?)', [venta]);

  }


  update(id: number, updateDetalleVentaDto: UpdateDetalleVentaDto) {
    return `This action updates a #${id} detalleVenta`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleVenta`;
  }
}
