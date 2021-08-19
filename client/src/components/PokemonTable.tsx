import * as React from "react";
import { Table } from "semantic-ui-react";
import { PokemonQuery } from "../__generated__/graphql";

interface PokemonTableProps {
  pokemonQuery: PokemonQuery;
}

const PokemonTable: React.FC<PokemonTableProps> = ({ pokemonQuery }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Types</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{pokemonQuery.pokemon.id}</Table.Cell>
        <Table.Cell>{pokemonQuery.pokemon.name}</Table.Cell>
        <Table.Cell>{pokemonQuery.pokemon.types}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default PokemonTable;
