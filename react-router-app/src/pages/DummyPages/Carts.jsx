import { useNavigate } from "react-router-dom";
import CartsList from "../../components/CartsList";

export default function Carts() {
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
      <h1 className="text-5xl">Carts ID</h1>
      <br />
      <CartsList />
    </div>
  );
}
