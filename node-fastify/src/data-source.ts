import "reflect-metadata";
import { DataSource } from "typeorm";
import { Client } from "./entity/Client";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "postgres",
  password: "sen567Sx",
  database: "db01",
  synchronize: false,
  logging: true,
  entities: [Client],
  migrations: [],
  subscribers: [],
});
