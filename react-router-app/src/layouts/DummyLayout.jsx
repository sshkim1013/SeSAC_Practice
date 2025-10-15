import { Link, Outlet } from "react-router-dom";
import PATHS from "../constants/paths";

export default function DummyLayout() {
  return (
    <div>
      <Link to={PATHS["DUMMY"]["PRODUCTS"]}>제품 목록</Link>
      <br />
      <Link to={PATHS["DUMMY"]["CARTS"]}>장바구니 목록</Link>
      <br />
      <Link to={PATHS["DUMMY"]["POSTS"]}>게시글 목록</Link>
      <Outlet />
    </div>
  );
}
