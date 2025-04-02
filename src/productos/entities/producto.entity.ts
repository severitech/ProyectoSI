

import { Categoria } from 'src/categorias/entities/categoria.entity';
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Producto {
  @PrimaryGeneratedColumn() // ✅ Usa esto en vez de @Column({ primary: true, generated: true })
  id: number;

  @Column({ unique: true }) 
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2 }) // ✅ Asegura que el precio sea decimal
  precio: number;

  @Column({type: 'text', nullable: true }) 
  descripcion?: string | null; // ✅ Agregado null para evitar problemas con valores vacíos

  @Column({ type: 'text',nullable: true }) 
  imagen?: string | null;

  @DeleteDateColumn({ nullable: true }) 
  deletedAt?: Date | null;

   @ManyToOne(() => Categoria, (categoria) => categoria.producto, { onDelete:'CASCADE', onUpdate: 'CASCADE', nullable: false }) 
   
   @JoinColumn({name: 'Categoria'})
   categoria: Categoria;
}
