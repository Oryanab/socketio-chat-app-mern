import React from "react";

export default function Rooms() {
  const rooms = [
    "javascript",
    "javascript",
    "javascript",
    "javascript",
    "javascript",
  ];
  return (
    <div>
      <h3>
        <i class="fas fa-comments"></i> Room Name:
      </h3>
      <ul id="rooms">
        <>
          {rooms.map((room) => (
            <li className="li-element">
              <h4>{room}</h4>
            </li>
          ))}
        </>
      </ul>
    </div>
  );
}
