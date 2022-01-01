import React, { useContext, useEffect } from "react";
import Chats from "../child-components/Chats";
import Rooms from "../child-components/Rooms";
import TextBox from "../child-components/TextBox";
import Users from "../child-components/Users";
import { removeUser } from "../../Redux/Actions/usersActions";
import { setUsername } from "../../Redux/Actions/usernameAction";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../socketContext";

export default function ChatPage() {
  const Dispatch = useDispatch();
  const currentRoom = useSelector((state) => state.currentRoom);
  const username = useSelector((state) => state.username);
  const users = useSelector((state) => state.users);
  const socketRef = useContext(SocketContext);
  const chats = useSelector((state) => state.chats);

  useEffect(() => {
    let leftMessage;
    for (let item of users) {
      try {
        leftMessage = chats.find(
          (message) => message.message === `${item.id} left`
        );
        console.log(item.username);
        Dispatch(removeUser(item.username));
      } catch (err) {}
    }
  }, []);

  const handleUserLeave = (e) => {
    e.preventDefault();
    //Dispatch(removeUser(username));
    Dispatch(setUsername(""));
    console.log(users);
    socketRef.current.emit("forceDisconnect", {
      room: currentRoom,
    });
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
          <h2 style={{ color: "gold" }}>Current Chat:</h2>
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
