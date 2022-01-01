import React, { useContext } from "react";
import { setCurrentRoom } from "../../Redux/Actions/currentRoomAction";
import { switchUserRoom } from "../../Redux/Actions/usersActions";
import { resetChat } from "../../Redux/Actions/chatsActions";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../socketContext";

export default function Users() {
  const users = useSelector((state) => state.users);
  const currentRoom = useSelector((state) => state.currentRoom);
  let usersInRoom = users.filter((user) => user.room === currentRoom);
  const username = useSelector((state) => state.username);
  const socketRef = useContext(SocketContext);
  const Dispatch = useDispatch();

  const handleUserClick = (e) => {
    e.preventDefault();
    Dispatch(setCurrentRoom(e.target.textContent));
    Dispatch(switchUserRoom(username, e.target.textContent));
    Dispatch(resetChat());
    const participantsId = users.find(
      (user) => user.username === e.target.textContent
    );
    socketRef.current.emit("switch-private", {
      username: username,
      room: participantsId.id,
      participants: e.target.textContent,
    });
  };
  return (
    <div>
      <h2 style={{ color: "gold" }}>Room Participants:</h2>
      <ul id="users">
        <>
          {usersInRoom.map((user) => (
            <li onClick={(e) => handleUserClick(e)} className="li-element">
              {user.username}
            </li>
          ))}
        </>
      </ul>
    </div>
  );
}
