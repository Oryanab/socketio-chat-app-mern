import React, { useContext } from "react";
import { setCurrentRoom } from "../../Redux/Actions/currentRoomAction";
import { switchUserRoom } from "../../Redux/Actions/usersActions";
import { resetChat } from "../../Redux/Actions/chatsActions";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../socketContext";

export default function Rooms() {
  const rooms = ["JavaScript", "Python", "PHP", "C#", "Ruby", "Java"];
  const Dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const currentRoom = useSelector((state) => state.currentRoom);
  const socketRef = useContext(SocketContext);

  const handleRoomClick = (e) => {
    Dispatch(setCurrentRoom(e.target.textContent));
    Dispatch(switchUserRoom(username, e.target.textContent));
    Dispatch(resetChat());
    socketRef.current.emit("switch-room", {
      username: username,
      room: e.target.textContent,
    });
  };

  return (
    <div>
      <h2 style={{ color: "gold" }}>Select Room:</h2>

      <ul id="rooms">
        <>
          {rooms.map((room) => (
            <li onClick={(e) => handleRoomClick(e)} className="li-element">
              <h4>{room}</h4>
            </li>
          ))}
        </>
      </ul>
    </div>
  );
}
