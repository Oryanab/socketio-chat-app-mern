const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("messageBack", { name, message });
  });

  socket.on("newUser", ({ name }) => {
    io.emit("messageBack", { name: "chatBot", message: "hello " + name });
  });

  socket.on("special treat", ({ name }) => {
    io.emit("messageBack", {
      name: "chatBot",
      message: name + " clicked a special treat",
    });
  });

  socket.on("disconnect", ({ name }) => {
    io.emit("messageBack", {
      name: "chatBot",
      message: "bye " + socket.id,
    });
  });
});

http.listen(4000, function () {
  console.log("listening on port 4000");
});
