import { Transform } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

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
