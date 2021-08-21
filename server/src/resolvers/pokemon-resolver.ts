import { Arg, ID, Query, Resolver } from 'type-graphql';
import { Pokemon, PokemonService } from '../pokemon-service/pokemon-service';
import { PokemonGQL } from './pokemon-type';
import axios from 'axios';

// TODO: Move pokemon service to PokemonResolver constructor, https://www.npmjs.com/package/typedi looks interesting for handling dependency injection
const pokemonService = new PokemonService(axios.create({ baseURL: 'https://pokeapi.co/api/v2' }));

@Resolver()
export class PokemonResolver {
  @Query(() => PokemonGQL)
  async pokemon(
    @Arg('pokemonNameOrId', () => ID) pokemonNameOrId: number | string,
  ): Promise<Pokemon> {
    return await pokemonService.getPokemonInfo(pokemonNameOrId);
  }
}
