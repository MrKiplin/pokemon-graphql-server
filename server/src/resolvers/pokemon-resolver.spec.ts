import 'reflect-metadata';
import { PokemonService } from '../pokemon-service/pokemon-service';
import { PokemonResolver } from './pokemon-resolver';

export type PartialMock<T> = jest.Mocked<Partial<T>>;

const getMockPokemonService = (): PartialMock<PokemonService> => {
  const pokemonService = {
    getPokemonInfo: jest.fn(),
  } as PartialMock<PokemonService>;

  return pokemonService;
};

describe('PokemonResolver', () => {
  let pokemonResolver: PokemonResolver;
  let pokemonService: PokemonService;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    pokemonService = getMockPokemonService() as PokemonService;
    pokemonResolver = new PokemonResolver(pokemonService);
  });

  it('Should get pokemon info', async () => {
    (pokemonService.getPokemonInfo as jest.Mock).mockResolvedValue({
      id: 1,
      name: 'test-pokemon-name',
      types: ['test-pokemon-type'],
    });
    const result = await pokemonResolver.pokemon('test-pokemon-name');

    expect(pokemonService.getPokemonInfo).toHaveBeenCalledWith('test-pokemon-name');
    expect(result).toEqual({ id: 1, name: 'test-pokemon-name', types: ['test-pokemon-type'] });
  });
});
