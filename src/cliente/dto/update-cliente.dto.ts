import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsOptional } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    @IsOptional()
    id_Facebook: string;
    @IsOptional()
    nombre: string;
    @IsOptional()
    telefono: string;
}
