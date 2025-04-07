import { Module } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { UsersModule } from 'src/users/users.module';
import { ClienteModule } from 'src/cliente/cliente.module';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Venta, Cliente, User]),
    UsersModule, // Importa el módulo `UsersModule` que contiene la entidad `User`
    ClienteModule, // Importa el módulo `ClienteModule` que contiene la entidad `Cliente`
  ],
  controllers: [VentaController],
  providers: [VentaService],
})
export class VentaModule { }

