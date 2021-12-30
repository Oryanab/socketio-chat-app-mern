import React from "react";
import { useSelector } from "react-redux";

export default function Users() {
  const users = useSelector((state) => state.users);
  const currentRoom = useSelector((state) => state.currentRoom);
  let usersInRoom = users.filter((user) => user.room === currentRoom);

  return (
    <div>
      <h3>
        <i className="fas fa-users"></i> Users
      </h3>
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
