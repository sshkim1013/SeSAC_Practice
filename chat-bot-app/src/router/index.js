import { createBrowserRouter } from "react-router-dom";

import RootRayout from "../layouts/RootLayout";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import ServiceIntroPage from "../pages/ServiceIntroPage";

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
      {
        path: "/stream-chat",
        Component: StreamChat,
      },
      {
        path: "/service",
        Component: ServiceIntroPage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/signup",
        Component: SignupPage,
      },
      {
        path: ""
      }
    ],
  },
]);

export default router;
