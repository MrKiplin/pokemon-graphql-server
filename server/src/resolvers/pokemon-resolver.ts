import { Arg, ID, Query, Resolver } from 'type-graphql';
import { Pokemon, PokemonService } from '../pokemon-service/pokemon-service';
import { PokemonGQL } from './pokemon-type';
import axios from 'axios';

@Resolver()
export class PokemonResolver {
  constructor(private pokemonService: PokemonService) {
    if (!pokemonService) {
      this.pokemonService = new PokemonService(
        axios.create({ baseURL: 'https://pokeapi.co/api/v2' }),
      );
    }
  }

  @Query(() => PokemonGQL)
  async pokemon(
    @Arg('pokemonNameOrId', () => ID) pokemonNameOrId: number | string,
  ): Promise<Pokemon> {
    return await this.pokemonService.getPokemonInfo(pokemonNameOrId);
  }
}
