import React from "react";
import { Form } from "react-bootstrap";
import Chats from "../child-components/Chats";
import Rooms from "../child-components/Rooms";
import TextBox from "../child-components/TextBox";
import Users from "../child-components/Users";

export default function ChatPage() {
  return (
    <div class="chat-container">
      <header class="chat-header">
        <h1>
          <i class="fas fa-smile"></i> ChatCord
        </h1>
        <a href="index.html" class="btn">
          Leave Room
        </a>
      </header>
      <main class="chat-main">
        <div class="chat-sidebar">
          <h3>
            <i class="fas fa-comments"></i> Current Room:
          </h3>
          <h4>JavaScript</h4> <br />
          <Rooms />
          <br />
          <Users />
        </div>
        <Chats />
      </main>
      <TextBox />
    </div>
  );
}
