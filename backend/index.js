const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

const chatCordBot = "ChatCord Bot";

const formatMessage = (id, room, username, message) => {
  return {
    id,
    room,
    username,
    message,
  };
};

const connectedUsers = {};

io.on("connection", (socket) => {
  socket.join(socket.handshake.query.room);

  io.emit(
    "messageBack",
    formatMessage(
      socket.id,
      socket.handshake.query.room,
      chatCordBot,
      `Hello, ${socket.handshake.query.username}, Welcome to the ${socket.handshake.query.room} chat`
    )
  );

  socket.on("user-sent-message", ({ room, username, message }) => {
    io.emit("message", formatMessage(socket.id, room, username, message));
  });

  // socket.on("joinUser", ({ room, username }) => {
  //   socket.broadcast
  //     .to(room)
  //     .emit(
  //       "messageBack",
  //       formatMessage(
  //         socket.id,
  //         room,
  //         chatCordBot,
  //         `${username} has joined the chat`
  //       )
  //     );
  // });

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
