import React from "react";
import Home from "./pages/Home";
import { ApolloProvider, ApolloClient } from "@apollo/react-hooks";
import { createHttpLink, InMemoryCache } from "@apollo/client";

const SERVER_URI = process.env.SERVER_URI || "http://localhost:4000/graphql";

const httpLink = createHttpLink({
  uri: SERVER_URI,
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
