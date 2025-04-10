import { Type } from "class-transformer";
import { IsDecimal, IsIn, IsInt, isInt, IsNumber, IsString } from "class-validator";

export class CreateDetalleVentaDto {
    @IsInt()
    venta: number
    @IsInt()
    producto: number;

    @IsInt()
    cantidad: number; 
    @Type(() => Number)
    @IsNumber({}, { message: 'subtotal debe ser un número decimal válido' })
    subtotal: number;
}
