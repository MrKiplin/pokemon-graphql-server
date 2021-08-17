import { Arg, Int, Query, Resolver } from 'type-graphql';
import { Pokemon, PokemonService } from '../pokemon-service/pokemon-service';
import { PokemonGQL } from './types/pokemon-gql';
import axios from 'axios';

// TODO: Re-factor to be a private constructor
const pokemonService = new PokemonService(axios.create({ baseURL: 'https://pokeapi.co/api/v2' }));

@Resolver()
export class PokemonResolver {
  @Query(() => PokemonGQL)
  async pokemon(@Arg('id', () => Int) id: number): Promise<Pokemon> {
    return await pokemonService.getPokemonInfo(id);
  }
}
