import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':categoria')
  findOne(@Param('categoria') categoria: string) {
    return this.categoriasService.findOne(categoria);
  }

  @Patch(':categoria')
  update(@Param('categoria') categoria: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasService.update(categoria, updateCategoriaDto);
  }

  @Delete(':categoria')
  remove(@Param('categoria') categoria: string) {
    return this.categoriasService.remove(categoria);
  }
}
