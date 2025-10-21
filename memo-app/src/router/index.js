import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import CreateContent from "../pages/CreateContent";
import Chat from "../pages/Chat";
import RootRayout from "../layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootRayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/create-content",
        Component: CreateContent,
      },
      {
        path: "/chat",
        Component: Chat,
      },
    ],
  },
]);

export default router;
