import { Producto } from "src/productos/entities/producto.entity";
import { Venta } from "src/venta/entities/venta.entity";
import { Column, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

export class DetalleVenta {
    @ManyToOne(() => Venta, (venta) => venta.detalle_venta)
    @JoinColumn({ name: 'venta_id' }) // Nombre explícito de la columna
    venta: Venta;

    @ManyToOne(() => Producto, (producto) => producto.detalle_venta)
    @JoinColumn({ name: 'producto_id' }) // Nombre explícito de la columna
    producto: Producto;

    @Column({ type: 'int' })
    cantidad: number;

    @Column({ type: 'decimal' })
    subtotal: number;

}
