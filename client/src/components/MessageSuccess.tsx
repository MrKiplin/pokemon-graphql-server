import React from "react";
import { Message } from "semantic-ui-react";

interface MessageSuccessProps {
  message: string;
}

const MessageSuccess: React.FC<MessageSuccessProps> = ({ message }) => (
  <Message positive>
    <Message.Header>Success</Message.Header>
    <p>{message}</p>
  </Message>
);

export default MessageSuccess;
