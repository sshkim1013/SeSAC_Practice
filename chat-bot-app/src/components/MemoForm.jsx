import { useState } from "react";

export default function MemoForm({ onCreate }) {
  const [text, setText] = useState("");

  const submit = (event) => {
    e.preventDefault();
    if (!text.trim()) return;
    onCreate(text.trim());
    setText("");
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <textarea
        value={text}
        onChange={(event) => setText(event["target"]["value"])}
        className="w-full p-3 border rounded"
        rows={5}
        placeholder="내용을 입력해주세요."
      />
      <div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          AI로 처리해 메모 생성
        </button>
      </div>
    </form>
  );
}
