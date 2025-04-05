import { Producto } from 'src/productos/entities/producto.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryColumn()
  categoria: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}