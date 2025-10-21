import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateMemo from "../pages/CreateMemo";
import MemoList from "../pages/MemoList";
import Chat from "../pages/Chat";
import StreamChat from "../pages/StreamChat";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import RootLayout from '../layouts/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "create-memo",
        Component: CreateMemo,
      },
      {
        path: "memolist",
        Component: MemoList,
      },
      {
        path: "chat",
        Component: Chat,
      },
      {
        path: "stream-chat",
        Component: StreamChat,
      },
      {
        Component: AuthLayout,
        children: [
          {
            path: "login",
            Component: Login,
          },
          {
            path: "signup",
            Component: Signup,
          },
        ],
      },
    ],
  },
]);

export default router;