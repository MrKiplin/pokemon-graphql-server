import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { PokemonResolver } from './resolvers/pokemon-resolver';

const port = process.env.PORT || 3000;

const main = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PokemonResolver],
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(3000, () => {
    console.log(`🚀 Server ready at: ${port}...`);
  });
};

main().catch((err) => {
  console.error(err);
});
