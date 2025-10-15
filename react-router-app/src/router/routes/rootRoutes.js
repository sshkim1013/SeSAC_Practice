import RootLayout from "../../layouts/RootLayout";
import Home from '../../pages/RootPages/Home';
import PATHS from "../../constants/paths";

const rootRoutes = [
  {
    path: PATHS["ROOT"]["INDEX"],
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];

export default rootRoutes;
