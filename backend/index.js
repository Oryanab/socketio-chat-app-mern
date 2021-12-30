const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", ({ room, username, message }) => {
    io.emit("message", {
      id: socket.id,
      room,
      username,
      message,
    });
  });

  socket.on("loginUser", ({ username, room }) => {
    io.emit("addUser", {
      id: socket.id,
      room,
      username,
    });
  });

  socket.on("login", ({ username, room }) => {
    socket.join(room);
    io.emit("login", {
      id: "6WC7huHocaDJm4H8AAAH",
      room,
      username: "ChatCord",
      message: `Hello, ${username}`,
    });
    socket.broadcast.to(room).emit("login", {
      id: "6WC7huHocaDJm4H8AAAH",
      room,
      username: "ChatCord",
      message: `${username} joined the chat`,
    });
  });

  socket.on("disconnect", () => {
    io.emit("messageBack", {
      name: "chatBot",
      message: "bye " + socket.id,
    });
  });
});

http.listen(4000, function () {
  console.log("listening on port 4000");
});
