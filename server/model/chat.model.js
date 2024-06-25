import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
  room: {
    type: String,
    required: [true, "room is required"],
  },
  username: {
    type: String,
    required: [true, "username is required"],
  },
  message: {
    type: String,
    required: [true, "message is required"],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const Message = model("Message", MessageSchema);
