import React from "react";
import Chats from "../child-components/Chats";
import Rooms from "../child-components/Rooms";
import TextBox from "../child-components/TextBox";
import Users from "../child-components/Users";
import { removeUser } from "../../Redux/Actions/usersActions";
import { useDispatch, useSelector } from "react-redux";

export default function ChatPage() {
  const Dispatch = useDispatch();
  const currentRoom = useSelector((state) => state.currentRoom);
  const username = useSelector((state) => state.username);

  const handleUserLeave = (e) => {
    e.preventDefault();
    Dispatch(removeUser(username));
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>
          <i className="fas fa-smile"></i> ChatCord
        </h1>

        <a
          onClick={(e) => handleUserLeave(e)}
          href="index.html"
          className="btn"
        >
          Leave Room
        </a>
      </header>
      <main className="chat-main">
        <div className="chat-sidebar">
          <h2 style={{ color: "gold" }}>Current Room:</h2>
          <h4>{currentRoom}</h4> <br />
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
