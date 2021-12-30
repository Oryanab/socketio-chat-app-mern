import React from "react";

export default function Chats() {
  const chats = [
    {
      id: 12345,
      room: "javascript",
      username: "oryan",
      time: "9:12pm",
      message:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,repudiandae.",
    },
    {
      id: 12345,
      room: "javascript",
      username: "oryan",
      time: "9:12pm",
      message:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,repudiandae.",
    },
  ];
  return (
    <div class="chat-messages">
      <>
        {chats.map((chat) => (
          <div class="message">
            <p class="meta">
              {chat.username} <span>{chat.time}</span>
            </p>
            <p class="text">{chat.message}</p>
          </div>
        ))}
      </>
    </div>
  );
}
