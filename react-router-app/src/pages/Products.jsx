import { useNavigate } from "react-router-dom";

import ProductsList from "../components/ProductsList";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="border p-2"
        onClick={() => {
          alert("홈페이지로 이동합니다.");
          navigate("/");
        }}
      >
        홈페이지로 이동
      </button>
      <h1 className="text-5xl">Products</h1>
      <br />
      <ProductsList />
      <br />
    </div>
  );
}
