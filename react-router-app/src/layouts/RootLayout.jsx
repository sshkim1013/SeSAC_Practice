import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <div>
        <Link to="/">홈페이지</Link>
      </div>
      <Outlet />
    </div>
  );
}
