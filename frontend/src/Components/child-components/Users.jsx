import React from "react";
import { useSelector } from "react-redux";

export default function Users() {
  const users = useSelector((state) => state.users);
  const currentRoom = useSelector((state) => state.currentRoom);
  let usersInRoom = users.filter((user) => user.room === currentRoom);
  console.log(users);

  return (
    <div>
      <h2 style={{ color: "gold" }}>Room Participants:</h2>
      <ul id="users">
        <>
          {usersInRoom.map((user) => (
            <li className="li-element">{user.username}</li>
          ))}
        </>
      </ul>
    </div>
  );
}
