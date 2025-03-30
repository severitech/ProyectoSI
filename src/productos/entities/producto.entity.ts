import { Categoria } from 'src/categorias/entities/categoria.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne
} from 'typeorm';

@Entity()
export class Producto {
  //@PrimaryGeneratedColumn()
  @Column({ primary: true, generated: true })
  id: number;

  @Column({unique: true})
  nombre: string;

  @Column()
  precio: number;

  @Column({nullable:true })
  descripcion?: string;

  @Column({nullable:true })
  imagen?: string;

  @DeleteDateColumn({nullable:true })
  deletedAt?: Date;

  @ManyToOne(()=> Categoria,(categoria)=> categoria.categoria)
  categoria: Categoria
}
