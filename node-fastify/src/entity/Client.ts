import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tb_clientes" })
export class Client {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  password: string;

  @Column({ type: "date" })
  birthdate: Date;

  @Column({ nullable: true })
  registered_at: string;
}
