import { Categoria } from 'src/categorias/entities/categoria.entity';
import { DetalleVenta } from 'src/detalle_venta/entities/detalle_venta.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 8 })
  codigo: string;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 255 })
  imagen: string;

  @Column()
  cantidad: number;

  @Column('float')
  precio: number;

  @Column({ length: 30, nullable: true })
  estado: string;

  @ManyToOne(() => Categoria, categoria => categoria.categoria)
  @JoinColumn({ name: 'categoria' })
  categoria: Categoria;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @OneToMany(() => DetalleVenta, (detalleVenta) => detalleVenta.producto, { eager: true })
  @JoinColumn({ name: 'DETALLE_VENTA' })
  detalle_venta: DetalleVenta[]; // Define explícitamente el nombre de la columna
}
