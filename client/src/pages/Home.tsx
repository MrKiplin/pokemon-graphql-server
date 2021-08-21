import { Fragment } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  PokemonQueryVariables,
  usePokemonLazyQuery,
} from "../__generated__/graphql";
import MessageSuccess from "../components/MessageSuccess";
import MessageWarning from "../components/MessageWarning";
import MessageError from "../components/MessageError";
import PokemonTable from "../components/PokemonTable";
import PageView from "../components/PageView";

interface FormInput {
  pokemonNameOrId: string;
}

interface HomeProps {
  title: string;
}

export const Home: React.FC<HomeProps> = ({ title }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInput>();

  const [getPokemon, { loading, data, error }] = usePokemonLazyQuery();

  const onSubmit: SubmitHandler<FormInput> = async (formInput) => {
    const variables: PokemonQueryVariables = {
      pokemonNameOrId: formInput.pokemonNameOrId,
    };
    getPokemon({ variables });
  };

  // TODO: Add integration tests for GraphQL Server
  // TODO: Add cypress e2e tests for frontend
  // TODO: Clean up CircleCI config

  return (
    <Fragment>
      <PageView title={title}>
        {data ? (
          <MessageSuccess message={"Pokemon info successfully retrieved"} />
        ) : null}
        {error ? <MessageError message={error.message} /> : null}
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
                <Input
                  loading={loading.valueOf()}
                  icon="search"
                  iconPosition="left"
                  placeholder="Search..."
                  {...field}
                />
              )}
            />
          </Form.Field>
          <Button primary type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>

        {data ? <PokemonTable pokemonQuery={data} /> : null}
      </PageView>
    </Fragment>
  );
};
