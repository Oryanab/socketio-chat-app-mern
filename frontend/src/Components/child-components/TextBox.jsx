import React, { useState } from "react";
import { addChat } from "../../Redux/Actions/chatsActions";
import { useDispatch, useSelector } from "react-redux";

export default function TextBox() {
  const [message, setMessage] = useState("");
  const Dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const currentRoom = useSelector((state) => state.currentRoom);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.length < 1) {
      alert("must enter text");
      return;
    } else {
      Dispatch(addChat(currentRoom, username, message));
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
          onClick={(e) => handleSendMessage(e)}
          type="button"
          className="btn"
        >
          <i className="fas fa-paper-plane"></i> Send
        </button>
      </form>
    </div>
  );
}
