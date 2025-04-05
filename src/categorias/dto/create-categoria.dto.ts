import { IsDecimal, IsInt, IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsString()
    categoria: string
    @IsDecimal()
    precio: number
    @IsInt()
    cantidad: number
}
