import React from "react";

import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState(""); // 에러 메시지 상태

  // 이벤트 핸들러 함수
  function handleChange(event) {
    const target = event["target"];
    console.log(target);

    const { name, value } = target;
    console.log(name, value);

    const newForm = { ...form, [name]: value };

    setForm(newForm);
  }

  function handleClick() {
    if (form["password"].length < 8) {
      setError("8자 이상 입력해주세요");
      return;
    }
    if (form.password !== form.passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다");
      return;
    }

    // 유효성 통과 시 에러 초기화
    setError("");
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-4">회원가입</h2>
      <div>
        <p>이메일</p>
        <input
          type="email"
          name="email"
          onChange={(event) => {
            handleChange(event);
          }}
          value={form["email"]}
          className="w-80 p-2 mb-3 border"
          placeholder="이메일"
        />
      </div>
      <div>
        <p>비밀번호</p>
        <input
          type="password"
          name="password"
          onChange={(event) => {
            handleChange(event);
          }}
          value={form["password"]}
          className="w-80 p-2 mb-3 border"
          placeholder="비밀번호"
        />
        {/* 비밀번호 에러 메시지 출력 */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <div>
        <p>비밀번호 확인</p>
        <input
          type="password"
          name="passwordConfirm"
          onChange={(event) => {
            handleChange(event);
          }}
          value={form["passwordConfirm"]}
          className="w-80 p-2 mb-3 border"
          placeholder="비밀번호 확인"
        />
      </div>
      <div className="w-80">
        <p>레벨</p>
        <input type="radio" name="level" value="신입" />
        신입
        <input type="radio" name="level" value="주니어" />
        주니어
        <input type="radio" name="level" value="시니어" />
        시니어
      </div>
      <div>
        <button
          onClick={() => {
            handleClick();
          }}
          className="bg-blue-500 text-white w-80 px-6 py-2 cursor-pointer"
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
