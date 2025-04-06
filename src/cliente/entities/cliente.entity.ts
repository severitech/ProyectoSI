import { Venta } from "src/venta/entities/venta.entity";
import { Column, Entity, OneToMany, UpdateDateColumn } from "typeorm";

@Entity()
export class Cliente {
    @Column({ primary: true, generated: true, nullable: false })
    id: number;
    @Column({ nullable: true, type: "varchar", length: 25 })
    id_Facebook: string;
    @Column({ nullable: false, type: "varchar", length: 70 })
    nombre: string;
    @Column({ nullable: true, type: "varchar", length: 15 })
    telefono: string;
    @Column({ nullable: true, type: "varchar", length: 15 })
    foto: string;
    @Column({ nullable: true })
    createdAt: Date;
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;
    @OneToMany(()=> Venta, (venta) => venta.cliente)
    ventas: Venta[];
}
