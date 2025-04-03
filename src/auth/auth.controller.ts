import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrerDto } from './dto/registre.dto';
import { LoginDto } from './dto/login.dto';
import { Request } from 'express';
import { Role } from './enum/rol.enum';
import { Auth } from './decorators/auth.decorator';

interface requestWithUser extends Request {
  user: {
    usuario: string;
    rol: string;
  };
}
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registrer')
  registrer(
    @Body()
    registrerDto: RegistrerDto,
  ) {
    return this.authService.registrer(registrerDto);
  }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @Auth(Role.ADMIN)
  profile(@Req() req: Request & requestWithUser) {
    return this.authService.profile({
      usuario: req.user.usuario,
      role: req.user.rol,
    });
  }

 /* @Get('profile')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  profile(@Req() req: Request & requestWithUser) {
    return this.authService.profile({
      usuario: req.user.usuario,
      role: req.user.rol,
    });
  }*/
}
