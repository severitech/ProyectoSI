import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class User {
  @Column({ primary: true, nullable: false, length: 50 , unique: true})
  usuario: string;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  nombre: string;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  password: string;

  @Column({ default: 'user' })
  role: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
