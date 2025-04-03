import { IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
export class LoginDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(5)
  usuario: string;
  @IsString()
  @Transform(({ value }) => value.trim())
  @MinLength(5)
  password: string;
}
