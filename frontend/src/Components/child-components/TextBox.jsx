import React, { useState, useContext } from "react";
import { addChat } from "../../Redux/Actions/chatsActions";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../socketContext";

export default function TextBox() {
  const [message, setMessage] = useState("");
  const Dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const currentRoom = useSelector((state) => state.currentRoom);
  const socketRef = useContext(SocketContext);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.length < 1) {
      alert("must enter text");
      return;
    } else {
      socketRef.current.emit("user-sent-message", {
        room: currentRoom,
        username: username,
        message: message,
      });
      setMessage("");
    }
  };

  return (
    <div className="chat-form-container">
      <form id="chat-form">
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          autocomplete="off"
          defaultValue={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={(e) => {
            handleSendMessage(e);
            document.getElementById("msg").value = "";
          }}
          type="button"
          className="btn"
        >
          Send
        </button>
      </form>
    </div>
  );
}
