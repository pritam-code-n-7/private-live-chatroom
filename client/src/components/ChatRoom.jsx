/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import io from "socket.io-client";
import InputField from "../reusables/InputField";
import Button from "../reusables/Button";

const socket = io("http://localhost:3000");

const ChatRoom = ({ username, room }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("joinRoom", { username, room });
    socket.on("loadMessages", (msgs) => {
      setMessages(msgs);
    });

    socket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [room, username]);

  const handleSendMessage = () => {
    if (message) {
      socket.emit("sendMessage", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow items-center justify-center text-white text-center">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="text-white max-w-lg border border-cyan-500 p-6 items-center text-balance"
          >
            <strong>{msg.username}</strong> : {msg.message}
            <em>{new Date(msg.timestamp).toLocaleTimeString()}</em>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center left-0 w-full">
        <InputField
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder={"type here..."}
          className="py-4 w-full bg-neutral-900 focus:outline-none border-b-2 focus:border-blue-500 rounded-sm text-blue-500 text-center"
        />

        <Button
          type="button"
          onClick={handleSendMessage}
          name="Send"
          className="py-2 px-4 rounded bg-blue-500 text-white"
        />
      </div>
    </div>
  );
};

export default ChatRoom;
