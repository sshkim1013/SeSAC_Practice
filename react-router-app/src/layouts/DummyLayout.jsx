import { Link, Outlet } from "react-router-dom";

export default function DummyLayout() {
  return (
    <div>
      <Link to="/">홈페이지</Link>
      <br />
      <Link to="/dummy/products">제품 목록</Link>
      <br />
      <Link to="/dummy/carts">장바구니 목록</Link>
      <br />
      <Link to="/dummy/posts">게시글 목록</Link>
      <Outlet />
    </div>
  );
}
