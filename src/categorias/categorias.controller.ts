import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enum/rol.enum';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interface/user-active.interface';
@Auth(Role.USER)
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  @Auth(Role.ADMIN)
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  findAll(@ActiveUser()
  user: UserActiveInterface) {
    return this.categoriasService.findAll();
  }

  @Get(':categoria')
  findOne(@Param('categoria') categoria: string) {
    return this.categoriasService.findOne(categoria);
  }

  @Patch(':categoria')
  @Auth(Role.ADMIN)
  update(@Param('categoria') categoria: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasService.update(categoria, updateCategoriaDto);
  }

  @Delete(':categoria')
  @Auth(Role.ADMIN)
  remove(@Param('categoria') categoria: string) {
    return this.categoriasService.remove(categoria);
  }
}
