import React, { useEffect, useRef, useState, createContext } from "react";
import Counter from "./Counter";
import ChatPage from "./core/ChatPage";
import LoginPage from "./core/LoginPage";
import io from "socket.io-client";
import { SocketContext } from "./socketContext";
import { addChat } from "../Redux/Actions/chatsActions";
import { addUser } from "../Redux/Actions/usersActions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const socketRef = useRef();
  const Dispatch = useDispatch();
  const chats = useSelector((state) => state.chats);
  const users = useSelector((state) => state.users);
  const currentRoom = useSelector((state) => state.users);
  const username = useSelector((state) => state.username);

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000", {
      transport: ["websocket"],
    });
    socketRef.current.on("login", ({ id, room, username, message }) => {
      Dispatch(addChat(id, room, username, message));
      console.log(chats);
    });
    socketRef.current.on("message", ({ id, room, username, message }) => {
      Dispatch(addChat(id, room, username, message));
      console.log(chats);
    });

    socketRef.current.on("addUser", ({ id, room, username }) => {
      Dispatch(addUser(id, username, room));
    });
  }, []);

  return (
    <div>
      <SocketContext.Provider value={socketRef}>
        <>{username.length < 1 ? <LoginPage /> : <ChatPage />}</>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
