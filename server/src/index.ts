import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PokemonResolver } from './resolvers/pokemon-resolver';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PokemonResolver],
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at: ${PORT}`);
  });
};

startServer().catch((err) => {
  console.error(err);
});
