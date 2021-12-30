import React, { useState, useContext } from "react";
import { setCurrentRoom } from "../../Redux/Actions/currentRoomAction";
import { setUsername } from "../../Redux/Actions/usernameAction";
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "../socketContext";
import { addUser } from "../../Redux/Actions/usersActions";

export default function LoginPage() {
  const [inputUsername, setInputUsername] = useState("");
  const [inputRoom, setInputRoom] = useState("JavaScript");
  const users = useSelector((state) => state.users);
  const socketRef = useContext(SocketContext);
  const Dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputUsername.length < 1) {
      alert("must fill a username");
      return;
    } else if (users.find((user) => user.username === inputUsername)) {
      alert("user name taken");
      return;
    } else {
      Dispatch(setUsername(inputUsername));
      Dispatch(setCurrentRoom(inputRoom));
      // Join User To Room
      // socketRef.current.emit("joinUser", {
      //   room: inputRoom,
      //   username: inputUsername,
      // });
    }
  };

  return (
    <div className="join-container">
      <header className="join-header">
        <h1>
          <i className="fas fa-smile"></i> ChatCord
        </h1>
      </header>
      <main className="join-main">
        <form action="chat.html">
          <div className="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
              defaultValue={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label for="room">Room</label>
            <select
              defaultValue={inputRoom}
              onChange={(e) => setInputRoom(e.target.value)}
              name="room"
              id="room"
            >
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="PHP">PHP</option>
              <option value="C#">C#</option>
              <option value="Ruby">Ruby</option>
              <option value="Java">Java</option>
            </select>
          </div>
          <button onClick={(e) => handleLogin(e)} type="button" className="btn">
            Join Chat
          </button>
        </form>
      </main>
    </div>
  );
}
