import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { Categoria } from 'src/categorias/entities/categoria.entity';

export class CreateProductoDto {
  
  @IsString()
  @MinLength(3)
  codigo: string;
  @IsString()
  @MinLength(3)
  nombre: string;

  @IsInt()
  @IsPositive()
  precio: number;

  @IsOptional()
  @IsString()
  imagen: string;
  @IsString()
  @IsNotEmpty()
  categoria: Categoria
}
