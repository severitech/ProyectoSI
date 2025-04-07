import { Cliente } from "src/cliente/entities/cliente.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Venta {
    @PrimaryGeneratedColumn()
    nro: number;

    @CreateDateColumn({ type: 'timestamp' })
    fecha: Date;

    @Column({ nullable: false })
    total: number;
    @Column({ type: 'varchar', length: 20, nullable: false })
    estado: string
    @UpdateDateColumn({ type: 'timestamp', nullable: true })
    updatedAt: Date;

    @ManyToOne(() => Cliente, (cliente) => cliente.ventas, { eager: true })
    @JoinColumn({ name: 'CLIENTE' }) // Define explícitamente el nombre de la columna
    cliente: Cliente;

    @ManyToOne(() => User, (user) => user.ventas, { eager: true })
    @JoinColumn({ name: 'USUARIO' }) // Define explícitamente el nombre de la columna
    usuario: User;


}
