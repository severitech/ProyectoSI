import { Injectable } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(Venta) private ventaRepository: Repository<Venta>,  // Asegúrate de que se inyecta correctamente
    @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>, // Asegúrate de que se inyecta correctamente
    @InjectRepository(User) private usuarioRepository: Repository<User>, // Asegúrate de que se inyecta correctamente
  ) { }

  async create(createVentaDto: CreateVentaDto) {
    const cliente = await this.clienteRepository.findOne({ where: { id: createVentaDto.cliente } });
    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }
  
    const usuario = await this.usuarioRepository.findOne({ where: { usuario: createVentaDto.usuario } });
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
  
    const venta = this.ventaRepository.create({
      ...createVentaDto,
      cliente: cliente,
      usuario: usuario,
      estado: createVentaDto.estado || 'pendiente',
    });
    //console.log(venta);
    return await this.ventaRepository.save(venta);
  }
  


  async findAll() {
    const ventas = await this.ventaRepository.find({
      relations: ['cliente', 'usuario'],
    });

    return ventas.map((venta) => ({
      nro: venta.nro,
      fecha: venta.fecha,
      total: venta.total,
      estado: venta.estado,
      Cliente: venta.cliente?.nombre,  // 👈 solo el ID del cliente
      usuario: venta.usuario?.usuario || venta.usuario, // 👈 depende si es entidad o string
    }));
  }

  async findOne(nro: number) {
    return await this.ventaRepository.findOneBy({ nro })
  }

  async update(id: number, updateVentaDto: UpdateVentaDto) {
    const partialUpdate: any = { ...updateVentaDto };

    if (updateVentaDto.cliente) {
      const cliente = await this.clienteRepository.findOne({ where: { id: updateVentaDto.cliente } });
      if (!cliente) {
        throw new Error('Cliente no encontrado');
      }
      partialUpdate.cliente = cliente;
    }

    if (updateVentaDto.usuario) {
      const usuario = await this.usuarioRepository.findOne({ where: { usuario: updateVentaDto.usuario } });
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      partialUpdate.usuario = usuario;
    }

    return this.ventaRepository.update(id, partialUpdate);
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
