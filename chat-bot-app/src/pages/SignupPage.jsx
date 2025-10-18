import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원가입 로직 (샘플)
    console.log({ email, password });
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">회원가입</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={email}
          onChange={(event) => setEmail(event["target"]["value"])}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event["target"]["value"])}
          placeholder="Password"
          type="password"
          className="w-full p-2 border rounded"
        />
        <button className="px-4 py-2 bg-green-600 text-white rounded">
          회원가입
        </button>
      </form>
    </div>
  );
}
