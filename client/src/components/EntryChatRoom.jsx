import { useState } from "react";
import InputField from "../reusables/InputField";
import Button from "../reusables/Button";
import { useNavigate } from "react-router-dom";

function EntryChatRoom() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [inRoom, setInRoom] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && room) {
      setInRoom(true);
      navigate("/chatroom");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      {!inRoom && (
        <div className="flex flex-col items-center">
          <div className="text-black">
            <InputField
              label="Username"
              type={"text"}
              placeholder={"enter your username"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="py-2 w-64 focus:ring focus:ring-cyan-500 rounded-full text-center"
            />
            <InputField
              label="Room ID"
              type={"text"}
              placeholder={"enter your room Id"}
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              className="py-2 w-64 focus:ring focus:ring-cyan-500 rounded-full text-center"
            />
          </div>
          <Button
            type={"button"}
            onClick={handleLogin}
            name={"Join Room"}
            className="p-2 rounded text-white bg-cyan-500 mt-4"
          />
        </div>
      )}
    </div>
  );
}

export default EntryChatRoom;
