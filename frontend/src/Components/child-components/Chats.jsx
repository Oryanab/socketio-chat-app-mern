import React, { useEffect, useRef, useState } from "react";
import { addChat } from "../../Redux/Actions/chatsActions";
import { useDispatch, useSelector } from "react-redux";

export default function Chats() {
  const Dispatch = useDispatch();
  const chats = useSelector((state) => state.chats);
  console.log(chats);

  return (
    <div className="chat-messages">
      <>
        {chats.map((chat) => (
          <div className="message">
            <p className="meta">
              {chat.username} <span>{chat.time}</span>
            </p>
            <p className="text">{chat.message}</p>
          </div>
        ))}
      </>
    </div>
  );
}
