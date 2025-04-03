import { NotFoundException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegistrerDto } from './dto/registre.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/common/enum/rol.enum';
@Injectable() // Asegúrate de que AuthService tenga este decorador
export class AuthService {
  constructor(
    private readonly userService: UsersService,

    private readonly jwtService: JwtService,
  ) { }

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
    if (!existeusuario) {
      throw new NotFoundException('Usuario no es correcto');
    }

    const passwordcorrecta = await bcryptjs.compare(
      password,
      existeusuario.password,
    );
    if (!passwordcorrecta) {
      throw new NotFoundException('Contraseña Incorrecta');
    }
    if (!existeusuario.activo) {
      throw new NotFoundException('Usuario no activo');
    }
    const payload = {
      usuario: existeusuario.usuario,
      role: existeusuario.role,
    };

    const token = await this.jwtService.signAsync(payload);

    return { token, usuario };
  }

  async profile({ usuario, role }: { usuario: string; role: string }) {
    return await this.userService.findOneByUser(usuario);
  }
}
