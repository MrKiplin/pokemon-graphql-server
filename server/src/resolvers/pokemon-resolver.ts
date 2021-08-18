import { Arg, Field, ID, ObjectType, Query, Resolver } from 'type-graphql';
import { Pokemon, PokemonService } from '../pokemon-service/pokemon-service';
import axios from 'axios';

const pokemonService = new PokemonService(axios.create({ baseURL: 'https://pokeapi.co/api/v2' }));

@ObjectType()
class PokemonGQL {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [String])
  types: string[];
}

@Resolver()
export class PokemonResolver {
  @Query(() => PokemonGQL)
  async pokemon(
    @Arg('pokemonNameOrId', () => ID) pokemonNameOrId: number | string,
  ): Promise<Pokemon> {
    return await pokemonService.getPokemonInfo(pokemonNameOrId);
  }
}
