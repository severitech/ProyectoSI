import { IsArray, ValidateNested, IsString, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductDto {
  @IsString()
  nombre: string;

  @IsNumber()
  @Min(1)
  precio: number;

  @IsNumber()
  @Min(1)
  cantidad: number;
}

export class CreateCheckoutDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  productos: ProductDto[];
}
