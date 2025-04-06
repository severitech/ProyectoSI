import { Cliente } from "src/cliente/entities/cliente.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";

@Entity()
export class Venta {
    @Column({ primary: true, generated: true, nullable: false })
    nro: number;
    @Column({ default: Date.now(), nullable: false })
    fecha: Date;
    @Column({ nullable: false })
    total: number;
    @Column({ type: 'varchar', length: 20, nullable: false })
    estado: string
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;

    @ManyToOne(() => Cliente, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'cliente' })
    cliente: Cliente;
    @ManyToOne(() => User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'usuario' })
    usuario: User;
}
