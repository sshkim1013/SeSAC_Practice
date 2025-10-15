import { Link, Outlet } from "react-router-dom";
import PATHS from "../constants/paths";

export default function RootLayout() {
  return (
    <div>
      <div>
        <Link to={PATHS["ROOT"]["INDEX"]}>홈페이지</Link>
      </div>
      <Outlet />
    </div>
  );
}
