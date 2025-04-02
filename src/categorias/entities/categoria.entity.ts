import { Producto } from 'src/productos/entities/producto.entity';
import { DeleteDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryColumn({ type: 'varchar', length: 30 }) // ✅ Corrección: PrimaryColumn en lugar de Column
  categoria: string;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date | null;
  @OneToMany(()=> Producto, (producto) => producto.categoria)
  producto: Producto[]
}
