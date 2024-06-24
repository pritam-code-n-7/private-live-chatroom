import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

//create a instance to use socket.io
const app = express();
const server = createServer(app);
app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");
  console.log("Id", socket.id);
});

//listning the localhost
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
