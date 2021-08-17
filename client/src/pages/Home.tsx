import React from "react";
import { Helmet } from "react-helmet";
import { Button, Container, Divider, Header, Input } from "semantic-ui-react";
// import { usePokemonQuery } from "../__generated__/graphql";

interface HomeProps {
  title: string;
}

export const Home: React.FC<HomeProps> = ({ title }) => {
  // const [pokekemonQuery] = usePokemonQuery();
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

        <Divider horizontal>Search</Divider>

        <Input placeholder="Search..." />

        <Button>Submit</Button>
      </Container>
    </>
  );
};
