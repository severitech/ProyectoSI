import { IsString } from "class-validator";

export class CreateDetalleVentaDto {
    @IsString()
    venta: number
    @IsString()
    producto: number;

    @IsString()
    cantidad: number;
    @IsString()
    subtotal: number;
}
