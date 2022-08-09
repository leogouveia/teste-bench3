import Fastify from "fastify";
import { Client } from "./entity/Client";
import typeOrmPlugin, { AppDataSource } from "./plugins/db";

const server = Fastify();

server.register(typeOrmPlugin);

server.get("/ping", (req, reply) => {
  reply.send("poung");
});

server.get("/", async (req, reply) => {
  const firstClient = await req.dataSource.manager.find(Client, {
    take: 10,
  });
  reply.send(firstClient);
});
/**
 * Run the server!
 */
server.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
