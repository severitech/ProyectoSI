import { Producto } from 'src/productos/entities/producto.entity';
import { Column, DeleteDateColumn, OneToMany } from 'typeorm';

export class Categoria {
  @Column({ primary: true })
  categoria: string;
  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;
  @OneToMany(() => Producto, (Producto) => Producto.categoria)
  producto: Producto[];
}
