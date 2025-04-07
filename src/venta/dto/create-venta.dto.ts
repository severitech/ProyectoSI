import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateVentaDto {
  @IsDate() // Validación para un objeto de tipo Date
  @Transform(({ value }) => new Date(value))
  fecha: Date;

  @IsNumber() // Para el total como número
  total: number;

  @IsString() // Validación para estado como string
  estado: string;

  @IsNumber()
  cliente: number;

  @IsString()
  usuario: string;

}
