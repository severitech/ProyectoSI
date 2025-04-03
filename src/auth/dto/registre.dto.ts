
import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';
import { Column } from 'typeorm';

export class RegistrerDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(5)
  nombre: string;
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  @Column({unique: true})
  usuario: string;
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(4)
  password: string;
}
