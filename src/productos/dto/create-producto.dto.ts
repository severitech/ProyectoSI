import {
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { Categoria } from 'src/categorias/entities/categoria.entity';

export class CreateProductoDto {
  @IsString()
  @MinLength(3)
  nombre: string;

  @IsInt()
  @IsPositive()
  precio: number;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  imagen: string;
  @IsString()
  categoria: Categoria
}
