

import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne } from 'typeorm';



@Entity()
export class Producto {
  @PrimaryGeneratedColumn() //  Genera el ID automáticamente
  id: number;

  @Column({ unique: true }) 
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2 }) //  Precio como decimal
  precio: number;

  @Column({ type: 'text', nullable: true })
  descripcion?: string | null; //  Puede ser nulo

  @Column({ type: 'text', nullable: true }) 
  imagen?: string | null; //  Puede ser nulo

  @DeleteDateColumn({ nullable: true }) 
  deletedAt?: Date | null;

  @ManyToOne(() => Categoria, (categoria) => categoria.producto, { onDelete: 'CASCADE', onUpdate: 'CASCADE', nullable: false })
  categoria: Categoria;  // Tipo de relación ManyToOne
}
