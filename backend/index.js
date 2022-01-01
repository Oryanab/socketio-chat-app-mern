const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", ({ room, username, message }) => {
    io.to(room).emit("message", {
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
    io.to(room).emit("login", {
      id: "6WC7huHocaDJm4H8AAAH",
      room,
      username: "ChatCord",
      message: `Hello ${username.toUpperCase()}, Welcome to the ${room} room `,
    });
    socket.broadcast.to(room).emit("login", {
      id: "6WC7huHocaDJm4H8AAAH",
      room,
      username: "ChatCord",
      message: `${username} joined the chat`,
    });
  });

  socket.on("switch-room", ({ username, room }) => {
    socket.join(room);
    io.to(room).emit("message", {
      id: "6WC7huHocaDJm4H8AAAH",
      room,
      username: "ChatCord",
      message: `Hello ${username.toUpperCase()}, Welcome to the ${room} room `,
    });
    socket.broadcast.to(room).emit("message", {
      id: "6WC7huHocaDJm4H8AAAH",
      room,
      username: "ChatCord",
      message: `${username} joined the chat`,
    });
  });

  socket.on("switch-private", ({ username, room, participants }) => {
    io.to(room).emit("message", {
      id: "6WC7huHocaDJm4H8AAAH",
      room,
      username: "ChatCord",
      message: `Hello ${username.toUpperCase()}, Welcome to a chat with ${participants}! `,
    });
  });

  // socket.on("private-message", ({ room, username, message }) => {
  //   io.to(room).emit("message", {
  //     id: socket.id,
  //     room,
  //     username,
  //     message,
  //   });
  // });

  const userId = socket.id;
  socket.on("forceDisconnect", ({ room }) => {
    io.emit("message", {
      id: userId,
      room,
      username: "ChatCord",
      message: `${userId} left`,
    });
    socket.disconnect();
  });
});

http.listen(4000, function () {
  console.log("listening on port 4000");
});
