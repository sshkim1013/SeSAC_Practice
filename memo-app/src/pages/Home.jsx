import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* 배경: 그라디언트 제거, 연한 회색(bg-gray-100)으로 단순화, 패딩 축소 */}
      <div className="bg-white rounded-lg shadow-md max-w-3xl p-8 text-gray-800">
        {/* 카드: 불투명도/블러 제거, 간단한 그림자(shadow-md), 패딩 축소 */}
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          {/* 제목: 그라디언트 텍스트 제거, 글꼴 크기 축소(5xl → 4xl), 진한 회색 */}
          Welcome to AI Memo Service!
        </h1>

        <p className="text-base mb-6 leading-relaxed text-gray-700">
          {/* 텍스트: 글꼴 크기 축소(lg → base), 회색 톤으로 통일 */}
          할 일을 입력하면 즉시 메모를 생성해주는 필수 메모 앱입니다.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          {/* 리스트: 간격 축소(space-y-3 → space-y-2), 회색 톤 유지 */}
          <li>이메일과 비밀번호로 간편하게 회원가입 및 로그인</li>
          <li>사용자의 입력 대로 빠른 메모 생성</li>
          <li>로컬 스토리지에 안전하게 저장되어 언제든 확인 가능</li>
        </ul>

        <p className="text-center text-gray-600 font-medium">
          {/* 링크 안내: indigo-700 → gray-600, 세미볼드 → 미디엄 */}
          좌측 메뉴에서 회원가입 혹은 로그인을 선택하여 시작하세요!
        </p>
      </div>
    </div>
  );
}