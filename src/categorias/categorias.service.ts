import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>
  ) {}
  create(createCategoriaDto: CreateCategoriaDto) {
    const nuevaCategoria = this.categoriaRepository.create(createCategoriaDto)
    return this.categoriaRepository.save(nuevaCategoria)
  
  }

  findAll() {
    return this.categoriaRepository.find()
  }

  findOne(categoria: string) {
    return this.categoriaRepository.findOneBy({categoria})
  }

  update(categoria: string, updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaRepository.update(categoria,updateCategoriaDto)
  }

  remove(categoria: string) {
    return this.categoriaRepository.softDelete(categoria)
  }
}
