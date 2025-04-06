
import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateVentaDto {
  @IsDate() // Si la fecha es un objeto Date
  @Transform(({ value }) => new Date(value))
  fecha: Date;

  @IsNumber() // Para el total como número
  total: number;

  @IsNumber()
  cliente: Cliente; 

  @IsString() // Usuario es un string (si es un nombre o ID de usuario)
  usuario: User;
}
