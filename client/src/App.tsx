import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { ApolloProvider, ApolloClient } from "@apollo/react-hooks";
import { createHttpLink, InMemoryCache } from "@apollo/client";

const uri = "http://localhost:3000/graphql";

const httpLink = createHttpLink({
  uri,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === "development",
  link: httpLink,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Home title="Pokemon GraphQL Server" />;
    </ApolloProvider>
  );
};

export default App;
