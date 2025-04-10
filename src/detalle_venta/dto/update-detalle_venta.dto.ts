import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleVentaDto } from './create-detalle_venta.dto';
import { IsOptional } from 'class-validator';

export class UpdateDetalleVentaDto extends PartialType(CreateDetalleVentaDto) {
    @IsOptional()
    venta?: number ;
    @IsOptional()
    producto?: number;
    @IsOptional()
    cantidad?: number;
    @IsOptional()
    subtotal?: number;
}
