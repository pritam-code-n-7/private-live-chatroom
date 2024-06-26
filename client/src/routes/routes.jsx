import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import EntryChatRoom from "../components/EntryChatRoom";
import ChatRoom from "../components/ChatRoom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <EntryChatRoom />
  },
  {
    path: "/chatroom",
    element: <ChatRoom />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
