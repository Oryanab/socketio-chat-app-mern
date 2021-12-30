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

io.on("connection", (socket) => {
  socket.on("joinUser", ({ room, username }) => {
    // join the user to the room
    socket.join(room);
    // message for new user
    io.emit(
      "messageBack",
      formatMessage(
        socket.id,
        room,
        chatCordBot,
        `Hello, ${username}, Welcome to the ${room} chat`
      )
    );

    //message for everyone
    socket.broadcast
      .to(room)
      .emit(
        "messageBack",
        formatMessage(
          socket.id,
          room,
          chatCordBot,
          `${username} has joined the chat`
        )
      );
  });

  // socket.on("new-user", ({ username, room }) => {
  //   //io.emit("new-user", { username, room });
  // });

  // socket.on("message", ({ id, room, username, message }) => {
  //   io.emit("message", { id, room, username, message });
  // });

  // socket.on("special treat", ({ name }) => {
  //   io.emit("messageBack", {
  //     name: "chatBot",
  //     message: name + " clicked a special treat",
  //   });
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
