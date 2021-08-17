import React from "react";
import { Helmet } from "react-helmet";

interface HomeProps {
  title: string;
}

export const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <>
      <Helmet titleTemplate="Pokemon GraphQL Server">
        <title>{title}</title>
      </Helmet>
      <h1>Hello World</h1>
    </>
  );
};
