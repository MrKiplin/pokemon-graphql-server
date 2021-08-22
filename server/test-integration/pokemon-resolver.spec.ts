import { graphQLCall } from './test-helpers';

describe('PokemonResolver', () => {
  const pokemonQuery = `
      query Pokemon($pokemonNameOrId: ID!) {
        pokemon(pokemonNameOrId: $pokemonNameOrId) {
          id
          name
          types
        }
      }
    `;

  it('Should get pokemon by name', async () => {
    const result = await graphQLCall({
      source: pokemonQuery,
      variableValues: {
        pokemonNameOrId: 'bulbasaur',
      },
    });

    expect(result).toEqual({
      data: {
        pokemon: {
          id: '1',
          name: 'bulbasaur',
          types: ['grass', 'poison'],
        },
      },
    });
  });

  it('Should get pokemon by ID', async () => {
    const result = await graphQLCall({
      source: pokemonQuery,
      variableValues: {
        pokemonNameOrId: '1',
      },
    });

    expect(result).toEqual({
      data: {
        pokemon: {
          id: '1',
          name: 'bulbasaur',
          types: ['grass', 'poison'],
        },
      },
    });
  });
});
