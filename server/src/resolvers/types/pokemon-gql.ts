import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class PokemonGQL {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [String])
  types: string[];
}
