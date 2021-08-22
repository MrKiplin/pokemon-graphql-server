import 'reflect-metadata';
import { ExecutionResult, graphql, GraphQLSchema } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { buildSchema } from 'type-graphql';
import { PokemonResolver } from '../src/resolvers/pokemon-resolver';

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: unknown;
  }>;
}

let schema: GraphQLSchema;

export const graphQLCall = async ({
  source,
  variableValues,
}: Options): Promise<ExecutionResult> => {
  if (!schema) {
    schema = await buildSchema({
      resolvers: [PokemonResolver],
    });
  }
  return graphql({
    schema,
    source,
    variableValues,
  });
};
