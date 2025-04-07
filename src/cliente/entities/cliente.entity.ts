
import { Venta } from "src/venta/entities/venta.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: "varchar", length: 25 })
    id_Facebook: string;
    @Column({ nullable: false, type: "varchar", length: 70 })
    nombre: string;
    @Column({ nullable: true, type: "varchar", length: 15 })
    telefono: string;
    @Column({ nullable: true, type: "varchar", length: 15 })
    foto: string;
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;
    @OneToMany(() => Venta, (venta) => venta.cliente)
    ventas: Venta[];
}
