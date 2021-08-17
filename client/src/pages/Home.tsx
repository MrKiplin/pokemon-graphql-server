import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Container, Divider, Header, Input } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { PokemonQuery, usePokemonQuery } from "../__generated__/graphql";
import MessageAlertError from "../components/MessageError";
import PokemonTable from "../components/PokemonTable";

interface HomeProps {
  title: string;
}

export const Home: React.FC<HomeProps> = ({ title }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [pokemon, setPokemon] = useState<PokemonQuery | undefined>(undefined);
  const { handleSubmit } = useForm();

  const { data, loading, error } = usePokemonQuery({
    variables: {
      pokemonNameOrId: "charizard",
    },
  });

  const onSubmit = async (): Promise<void> => {
    if (error) {
      setErrorMessage(`There was a problem with the server: ${error.message}`);
    }
    if (data) {
      setPokemon(data);
    }
  };

  return (
    <>
      <Helmet titleTemplate="Pokemon GraphQL Server">
        <title>{title}</title>
      </Helmet>
      <Container>
        <Header as="h1" textAlign="center">
          Pokemon GraphQL Server
          <Header.Subheader>
            Simple GraphQL stack for connecting to the Pokemon REST API
          </Header.Subheader>
        </Header>

        {errorMessage ? <MessageAlertError message={errorMessage} /> : null}

        <Divider horizontal>Search</Divider>

        <Input name="pokemon" id="pokemon" placeholder="Search..." />

        <Button
          content="Submit"
          disabled={loading}
          onClick={handleSubmit(onSubmit)}
        />
        {pokemon ? <PokemonTable pokemonQuery={pokemon} /> : null}
      </Container>
    </>
  );
};
