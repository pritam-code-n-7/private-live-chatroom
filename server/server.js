import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import { Message } from "./model/chat.model.js";
import { connectDB } from "./database/connection.database.js";

//create a instance to use socket.io
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

//middlewares
app.use(cors());


//mongodb connection
connectDB();

//socket.io connction
io.on("connection", (socket) => {
  console.log("New client connected");
  console.log("Id", socket.id);

//handle joining room and initial messages loading
  socket.on("joinRoom", async ({ username, room }) => {
    socket.join(room);
    const messages = await Message.find({ room })
      .sort({ timestamp: -1 })
      .limit(10);
    socket.emit("loadMessages", messages.reverse());

//handle sending messages
    socket.on("sendMessage", async (message) => {
      const newMessage = new Message({ room, username, message });
      await newMessage.save();

      io.to(room).emit("message", { username, message, timestamp: new Date() });
    });
  });

  //socket.io disconnection logic
  socket.on("dissconnect", () => {
    console.log("client disconnected");
  });
});

//listning localhost to the port
const PORT = 3000;
server
  .listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
  })

