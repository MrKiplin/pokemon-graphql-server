import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Container, Form, Header, Input } from "semantic-ui-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PokemonQuery, usePokemonQuery } from "../__generated__/graphql";
import MessageError from "../components/MessageError";
import MessageSuccess from "../components/MessageSuccess";
import MessageWarning from "../components/MessageWarning";
import PokemonTable from "../components/PokemonTable";

interface FormInput {
  pokemonNameOrId: string;
}

interface HomeProps {
  title: string;
}

export const Home: React.FC<HomeProps> = ({ title }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [pokemon, setPokemon] = useState<PokemonQuery | undefined>(undefined);
  const [formState, setFormState] = useState<FormInput>({
    pokemonNameOrId: "",
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>();

  const { data, loading, error } = usePokemonQuery({
    variables: {
      pokemonNameOrId: formState?.pokemonNameOrId,
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (formData) => {
    setFormState(formData);

    if (error) {
      setErrorMessage(`There was a problem with the server: ${error.message}`);
    }
    if (data) {
      setPokemon(data);
      setSuccessMessage("Pokemon info successfully retrieved");
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

        {successMessage ? <MessageSuccess message={successMessage} /> : null}
        {errorMessage ? <MessageError message={errorMessage} /> : null}
        {errors.pokemonNameOrId && (
          <MessageWarning message="Pokemon Name or ID is required" />
        )}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Pokemon Name or ID</label>
            <Controller
              name="pokemonNameOrId"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  placeholder="Search..."
                  error={errors.pokemonNameOrId ? true : false}
                  {...field}
                />
              )}
            />
          </Form.Field>
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>

        {pokemon ? <PokemonTable pokemonQuery={pokemon} /> : null}
      </Container>
    </>
  );
};
