import { NotFoundException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegistrerDto } from './dto/registre.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable() // Asegúrate de que AuthService tenga este decorador
export class AuthService {
  constructor(
    private readonly userService: UsersService,

    private readonly jwtService: JwtService,
  ) {}

  async registrer({ nombre, usuario, password }: RegistrerDto) {
    const user = await this.userService.findOneByUser(usuario);
    if (user) {
      throw new NotFoundException('El usuario ya existe');
    }

    return await this.userService.create({
      nombre,
      usuario,
      password: await bcryptjs.hash(password, 10),
    });
  }

  async login({ usuario, password }: LoginDto) {
    const existeusuario = await this.userService.findOneByUser(usuario);
    if (!existeusuario || !existeusuario.activo) {
      throw new NotFoundException('El Usuario o Contraseña no son correctos');
    }
    const passwordcorrecta = await bcryptjs.compare(
      password,
      existeusuario.password,
    );
    if (!existeusuario || !existeusuario.activo || !passwordcorrecta) {
      throw new NotFoundException('El Usuario o Contraseña no son correctos');
    }

    const role = existeusuario.role;
    const payload = {
      usuario: existeusuario.usuario,
      role: existeusuario.role,
    };

    const token = await this.jwtService.signAsync(payload);

    return { token, role, usuario };
  }

  async profile({ usuario, role }: { usuario: string; role: string }) {
    return await this.userService.findOneByUser(usuario);
  }
}
