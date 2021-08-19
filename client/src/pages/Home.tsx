import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Checkbox,
  Container,
  Form,
  Header,
  Input,
} from "semantic-ui-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { PokemonQuery, usePokemonQuery } from "../__generated__/graphql";
import MessageError from "../components/MessageError";
import MessageSuccess from "../components/MessageSuccess";
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
  const { handleSubmit, control } = useForm<FormInput>();

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

  // TODO: Try adding results table to Success message alert.
  // TODO: Add validation

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

        {errorMessage ? <MessageError message={errorMessage} /> : null}
        {successMessage ? <MessageSuccess message={successMessage} /> : null}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Pokemon Name or ID</label>
            <Controller
              name="pokemonNameOrId"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input placeholder="Search..." {...field} />
              )}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I am not a robot" />
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
