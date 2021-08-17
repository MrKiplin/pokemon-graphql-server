import * as React from "react";
import { Message } from "semantic-ui-react";

interface MessageAlertErrorProps {
  message: string;
}

const MessageAlertError: React.FC<MessageAlertErrorProps> = ({ message }) => (
  <Message negative>
    <Message.Header>Info</Message.Header>
    <p>{message}</p>
  </Message>
);

export default MessageAlertError;
