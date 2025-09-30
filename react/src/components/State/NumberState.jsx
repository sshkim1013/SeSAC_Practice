// components/State/NumberState.jsx

import { useState } from "react";

export default function NumberState() {
  // 상태 추가
  const [number, setNumber] = useState(0);

  function increment() {
    console.log("1 증가");
    // 상태 업데이트 로직
    let increase = number + 1;
    setNumber(increase);
  }

  function decrement() {
    console.log("1 감소");
    // 상태 업데이트 로직
    let decrease = number - 1;
    setNumber(decrease);
  }

  function multiply() {
    console.log("2배 곱하기");
    // 상태 업데이트 로직
    let multyple = number * 2;
    setNumber(multyple);
  }

  function reset() {
    console.log("0으로 초기화");
    // 상태 업데이트 로직
    let reseted = 0;
    setNumber(reseted);
  }

  return (
    <div className="flex flex-col items-center p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">숫자 상태 관리</h2>
      <p className="text-3xl font-bold mb-4">현재 값: {number}</p>
      <div className="flex gap-2 flex-wrap justify-center">
        <button
          onClick={() => {
            increment();
          }}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +1
        </button>
        <button
          onClick={() => {
            decrement();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -1
        </button>
        <button
          onClick={() => {
            multiply();
          }}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          ×2
        </button>
        <button
          onClick={() => {
            reset();
          }}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          초기화
        </button>
      </div>
    </div>
  );
}
