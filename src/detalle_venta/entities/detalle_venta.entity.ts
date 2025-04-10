import { Producto } from "src/productos/entities/producto.entity";
import { Venta } from "src/venta/entities/venta.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('detalle_venta')
export class DetalleVenta {
    @PrimaryColumn({ type: 'int' })
    @ManyToOne(() => Venta, (venta) => venta.detalle_venta)
    @JoinColumn({ name: 'venta' }) // Nombre explícito de la columna
    venta: Venta;
    @PrimaryColumn({ type: 'int' })
    @ManyToOne(() => Producto, (producto) => producto.detalle_venta)
    @JoinColumn({ name: 'producto' }) // Nombre explícito de la columna
    producto: Producto;

    @Column({ type: 'int' })
    cantidad: number;

    @Column({ type: 'decimal' })
    subtotal: number;

}
