import React, { useState } from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import MessageForm from "./components/MessageForm";
import MyMessage from "./components/MyMessage";
import TheirMessage from "./components/TheirMessage";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="e73c8186-ce41-4b0f-84dc-94e463c60cb3"
      userName="zarakious"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
