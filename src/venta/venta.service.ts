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
    // Paso 1: Obtener el cliente completo usando el ID
    const cliente = await this.clienteRepository.findOne({
      where: { id: createVentaDto.cliente.id },
    });
    
    
      if (!cliente) {
        throw new Error('Cliente no encontrado');
      }
    
      // Paso 2: Crear la venta, asignando el objeto cliente y resolviendo el usuario
      const usuario = await this.usuarioRepository.findOne({
        where: { usuario: createVentaDto.usuario.usuario },
      });
  
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
  
      const venta = this.ventaRepository.create({
        ...createVentaDto,
        cliente: cliente, // Asignar el objeto cliente completo
        usuario: usuario, // Asignar el objeto usuario completo
      });
      console.log(venta);
    // Paso 3: Guardar la venta
    // return await this.ventaRepository.save(venta);
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

  update(id: number, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: number) {
    return `This action removes a #${id} venta`;
  }
}
