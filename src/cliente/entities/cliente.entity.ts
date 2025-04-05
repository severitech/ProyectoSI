import { Column, Entity, IntegerType } from "typeorm";

@Entity()
export class Cliente {
    @Column({ primary: true, generated: true, nullable: false })
    id: number;
    @Column({ nullable: false, type: "varchar", length: 70 })
    nombre: string;
    @Column({ nullable: false, type: "varchar", length: 70 })
    paterno: string;
    @Column({ nullable: false, type: "varchar", length: 70 })
    materno: string;
    @Column({ nullable: false, type: "varchar", length: 15 })
    telefono: string;
    @Column({ nullable: true })
    createdAt: Date;


}
