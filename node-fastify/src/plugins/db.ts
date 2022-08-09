import "reflect-metadata";
import fp from "fastify-plugin";

import { DataSource } from "typeorm";
import { Client } from "../entity/Client";
import { FastifyPluginAsync } from "fastify";

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

declare module "fastify" {
  interface FastifyRequest {
    dataSource: DataSource;
  }
}

const dbPluginAsync: FastifyPluginAsync = async (fastify) => {
  try {
    const dataSource = await AppDataSource.initialize();
    fastify.decorateRequest("dataSource", dataSource);
  } catch (error) {
    console.log(error);
  }
};

export default fp(dbPluginAsync);
