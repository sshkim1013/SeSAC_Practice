import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/">홈</Link>
      <br />
      <Link to="/dummy/products">제품 목록</Link>
      <br />
      <Link to="/dummy/carts">장바구니 목록</Link>
      <br />
      <Link to="/dummy/posts">게시글 목록</Link>
    </div>
  );
}
