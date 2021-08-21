import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Container } from "semantic-ui-react";
import PageHeader from "./PageHeader";

interface PageViewProps {
  title: string;
}

const PageView: React.FC<PageViewProps> = ({ title, children }) => (
  <Fragment>
    <Helmet titleTemplate="Pokemon GraphQL Server">
      <title>{title}</title>
    </Helmet>
    <Container>
      <PageHeader
        header="Pokemon GraphQL Server"
        subHeader="Simple GraphQL stack for connecting to the Pokemon REST API"
      />
      {children}
    </Container>
  </Fragment>
);

export default PageView;
