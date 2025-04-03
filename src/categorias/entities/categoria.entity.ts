import { Producto } from 'src/productos/entities/producto.entity';
import { DeleteDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryColumn({ type: 'varchar', length: 30 }) // ✅ PrimaryKey con tipo y longitud
  categoria: string;

  @DeleteDateColumn({ nullable: true }) // ✅ Campo para marca de tiempo de eliminación
  deletedAt?: Date | null;

  @OneToMany(() => Producto, (producto) => producto.categoria)
  producto: Producto[];
}