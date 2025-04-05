import { IsString } from "class-validator";

export class CreateClienteDto {
    @IsString()
    nombre: string;

    @IsString()
    paterno: string;

    @IsString()
    materno: string

    @IsString()
    telefono: string;

}
