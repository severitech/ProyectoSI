import { IsOptional, IsString } from "class-validator";

export class CreateClienteDto {
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    id_Facebook?: string;

    @IsOptional()
    @IsString()
    foto?: string

}
