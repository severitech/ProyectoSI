import { Column, Entity } from "typeorm";

@Entity()
export class Venta {
    @Column({primary: true, generated: true, nullable: false})
    Nro: number;
    @Column({default: Date.now(), nullable: false})
    fecha: Date;
    @Column({nullable: true})
    saldo: number;
    @Column()
    descuento: number;
    @Column()
    abono: number;
    @Column({})
    estado: string

}
