import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type PokemonGql = {
  __typename?: 'PokemonGQL';
  id: Scalars['String'];
  name: Scalars['String'];
  types: Array<Scalars['String']>;
  imageURL: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  pokemon: PokemonGql;
};


export type QueryPokemonArgs = {
  pokemonNameOrId: Scalars['ID'];
};

export type PokemonQueryVariables = Exact<{
  pokemonNameOrId: Scalars['ID'];
}>;


export type PokemonQuery = { __typename?: 'Query', pokemon: { __typename?: 'PokemonGQL', id: string, name: string, types: Array<string>, imageURL: string } };


export const PokemonDocument = gql`
    query Pokemon($pokemonNameOrId: ID!) {
  pokemon(pokemonNameOrId: $pokemonNameOrId) {
    id
    name
    types
    imageURL
  }
}
    `;

/**
 * __usePokemonQuery__
 *
 * To run a query within a React component, call `usePokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonQuery({
 *   variables: {
 *      pokemonNameOrId: // value for 'pokemonNameOrId'
 *   },
 * });
 */
export function usePokemonQuery(baseOptions: Apollo.QueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
      }
export function usePokemonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
        }
export type PokemonQueryHookResult = ReturnType<typeof usePokemonQuery>;
export type PokemonLazyQueryHookResult = ReturnType<typeof usePokemonLazyQuery>;
export type PokemonQueryResult = Apollo.QueryResult<PokemonQuery, PokemonQueryVariables>;