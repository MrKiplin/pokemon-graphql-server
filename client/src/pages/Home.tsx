import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Container, Form, Header, Input } from "semantic-ui-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { usePokemonQuery } from "../__generated__/graphql";
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
  const [formState, setFormState] = useState<FormInput>({
    pokemonNameOrId: "",
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>();

  const { data, loading } = usePokemonQuery({
    variables: {
      pokemonNameOrId: formState?.pokemonNameOrId,
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (formData) => {
    setFormState(formData);
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

        {data ? (
          <MessageSuccess message={"Pokemon info successfully retrieved"} />
        ) : null}
        {errors.pokemonNameOrId?.type === "required" && (
          <MessageWarning message="Pokemon Name or ID is required" />
        )}
        {errors.pokemonNameOrId?.type === "pattern" && (
          <MessageWarning message="Pokemon Name or ID must be letters or numbers" />
        )}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <label>Pokemon Name or ID</label>
            <Controller
              name="pokemonNameOrId"
              control={control}
              rules={{
                required: true,
                pattern: new RegExp("^[a-zA-Z0-9_.-]*$"),
              }}
              render={({ field }) => (
                <Input placeholder="Search..." {...field} />
              )}
            />
          </Form.Field>
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>

        {data ? <PokemonTable pokemonQuery={data} /> : null}
      </Container>
    </>
  );
};
