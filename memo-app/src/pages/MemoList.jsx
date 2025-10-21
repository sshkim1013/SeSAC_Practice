import React, { useState, useEffect } from "react";

export default function MemoList() {
  // 메모 목록 상태
  const [memos, setMemos] = useState([]);
  // 필터 상태: 전체(all), 완료(done), 미완료(notdone)
  const [filter, setFilter] = useState("all");

  // 컴포넌트 마운트 시 로컬스토리지에서 메모 불러오기
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("memos")) || [];
    setMemos(stored);
  }, []);

  // 필터링된 메모 리스트 계산
  const filteredMemos = memos.filter((memo) => {
    if (filter === "done") return memo.done; // 완료된 것만
    if (filter === "notdone") return !memo.done; // 미완료만
    return true; // 전체
  });

  // 메모 완료/미완료 상태 토글
  const toggleDone = (id) => {
    const updated = memos.map((memo) =>
      memo.id === id ? { ...memo, done: !memo.done } : memo
    );
    setMemos(updated);
    localStorage.setItem("memos", JSON.stringify(updated)); // 로컬스토리지 저장
  };

  // 메모 삭제 함수
  const deleteMemo = (id) => {
    if (!window.confirm("정말 삭제할까요?")) return; // 삭제 확인
    const updated = memos.filter((memo) => memo.id !== id);
    setMemos(updated);
    localStorage.setItem("memos", JSON.stringify(updated)); // 로컬스토리지 저장
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">메모 목록</h2>

      {/* 필터 버튼 그룹 */}
      <div className="mb-4 flex gap-2">
        <button
          className={`px-3 py-1 rounded ${
            filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("all")}
        >
          전체
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "notdone" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("notdone")}
        >
          미완료
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "done" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("done")}
        >
          완료
        </button>
      </div>

      {/* 메모 없을 때 안내 문구 */}
      {filteredMemos.length === 0 && (
        <p className="text-gray-600">메모가 없습니다.</p>
      )}

      {/* 메모 리스트 */}
      <ul>
        {filteredMemos.map((memo) => (
          <li
            key={memo.id}
            className="mb-4 p-4 border rounded flex justify-between items-center"
          >
            {/* 메모 제목, 내용, 생성일 표시 */}
            <div>
              <h3
                className={`font-semibold ${
                  memo.done ? "line-through text-gray-500" : ""
                }`}
              >
                {memo.title}
              </h3>
              <p
                className={`text-sm ${
                  memo.done ? "line-through text-gray-500" : ""
                }`}
              >
                {memo.content}
              </p>
              <small className="text-gray-400">
                {new Date(memo.createdAt).toLocaleString()}
              </small>
            </div>

            {/* 완료/취소, 삭제 버튼 */}
            <div className="flex gap-2">
              <button
                onClick={() => toggleDone(memo.id)}
                className={`px-3 py-1 rounded ${
                  memo.done ? "bg-yellow-400" : "bg-green-500 text-white"
                }`}
              >
                {memo.done ? "취소" : "완료"}
              </button>
              <button
                onClick={() => deleteMemo(memo.id)}
                className="px-3 py-1 rounded bg-red-600 text-white"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
