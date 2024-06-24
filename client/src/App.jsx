/* eslint-disable no-unused-vars */
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:3000");

  return <div className="p-2">app</div>;
}

export default App;
