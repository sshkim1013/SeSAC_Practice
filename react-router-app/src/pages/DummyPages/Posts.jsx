import { useNavigate } from "react-router-dom";
import PostsList from "../../components/PostsList";

export default function Posts() {
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
      <h1 className="text-5xl">Posts</h1>
      <br />
      <PostsList />
    </div>
  );
}
