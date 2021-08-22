import React from "react";
import { Message } from "semantic-ui-react";

interface MessageWarningProps {
  message: string;
}

const MessageWarning: React.FC<MessageWarningProps> = ({ message }) => (
  <Message warning>
    <Message.Header>Warning</Message.Header>
    <p>{message}</p>
  </Message>
);

export default MessageWarning;
