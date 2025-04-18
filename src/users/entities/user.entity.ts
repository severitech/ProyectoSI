import { Role } from 'src/common/enum/rol.enum';
import { Venta } from 'src/venta/entities/venta.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'varchar', length: 50, unique: true })
  usuario: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 255, select: false, nullable: false })
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,  // Usa el valor por defecto del enum 'USER' 
    nullable: false
  })
  role: Role;

  @Column({ default: true })
  activo: boolean;
  @OneToMany(() => Venta, (venta) => venta.usuario)
  ventas: Venta[];

}
