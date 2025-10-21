// 리액트에서 기능을 가져온다. useState는 상태를 저장하는 도구!
import React, { useState } from "react";

// 컴포넌트 만들기 (화면에 보여지는 부분)
export default function CreateMemo() {
  // 사용자가 입력한 문장을 저장할 공간 (빈 문자열로 시작)
  const [input, setInput] = useState("");

  // 구조화된 메모를 저장할 공간 (처음엔 없음)
  const [generatedMemo, setGeneratedMemo] = useState(null);

  // 메모를 구조화하는 함수 (버튼 누르면 실행됨)
  const handleGenerate = async () => {
    // 지금은 진짜 AI 대신 임시로 내용 만들어주는 코드
    const mockData = {
      title: "회의 준비", // 제목은 그냥 정해진 텍스트
      content: input, // 내용은 사용자가 쓴 문장
    };

    // 만든 내용을 화면에 보여주기 위해 저장
    setGeneratedMemo(mockData);
  };

  // 메모 저장하는 함수 (메모 저장 버튼 누르면 실행)
  const handleSave = () => {
    // 기존 메모들 가져오기 (없으면 빈 배열로 시작)
    const existing = JSON.parse(localStorage.getItem("memos")) || [];

    // 새로운 메모 만들기
    const newMemo = {
      ...generatedMemo, // 지금 만든 메모 넣고
      id: Date.now(), // 고유한 번호 (시간 기준)
      createdAt: new Date().toISOString(), // 만든 시간 저장
      done: false, // 아직 완료되지 않은 메모
    };

    // 기존 메모 + 새 메모를 묶어서 로컬스토리지에 저장
    localStorage.setItem("memos", JSON.stringify([...existing, newMemo]));

    // 입력창과 메모 초기화 (다시 쓸 수 있게 비움)
    setGeneratedMemo(null);
    setInput("");

    // 사용자에게 알려주기
    alert("메모가 저장되었습니다!");
  };

  // 화면에 보여줄 내용들
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">메모 생성</h2>

      <textarea
        className="w-full p-2 border mb-4"
        rows="5" // 5줄짜리
        placeholder="메모를 입력하세요" // 아무것도 안 썼을 때 보이는 힌트
        value={input} // 현재 입력 값
        onChange={(e) => setInput(e.target.value)} // 입력이 바뀌면 상태도 바꿔줌
      ></textarea>

      {/* 메모 구조화 버튼 */}
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleGenerate} // 누르면 handleGenerate 실행
      >
        메모 생성
      </button>

      {/* 구조화된 메모가 있을 때만 아래 내용 보여줌 */}
      {generatedMemo && (
        <div className="mt-6 border p-4 bg-gray-100">
          {/* 구조화된 메모 제목 */}
          <h3 className="text-lg font-semibold mb-2">메모 출력</h3>

          {/* 제목과 내용 보여주기 */}
          <p>
            <strong>제목:</strong> {generatedMemo.title}
          </p>
          <p>
            <strong>내용:</strong> {generatedMemo.content}
          </p>

          {/* 저장/취소 버튼 */}
          <div className="mt-4 flex gap-2">
            {/* 메모 저장 버튼 */}
            <button
              className="bg-green-500 text-white px-4 py-2"
              onClick={handleSave}
            >
              메모 저장
            </button>

            {/* 메모 취소 버튼 */}
            <button
              className="bg-red-500 text-white px-4 py-2"
              onClick={() => setGeneratedMemo(null)} // 메모 없앰
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
