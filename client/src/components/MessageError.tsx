import * as React from "react";
import { Message } from "semantic-ui-react";

interface MessageErrorProps {
  message: string;
}

const MessageError: React.FC<MessageErrorProps> = ({ message }) => (
  <Message negative>
    <Message.Header>Info</Message.Header>
    <p>{message}</p>
  </Message>
);

export default MessageError;
