import React from "react";
import { Header } from "semantic-ui-react";

interface PageHeaderProps {
  header: string;
  subHeader: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ header, subHeader }) => (
  <Header as="h1" textAlign="center">
    {header}
    <Header.Subheader>{subHeader}</Header.Subheader>
  </Header>
);

export default PageHeader;
