// components/Counter/Counter.jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log("1 증가");
    // 상태 업데이트 로직
    let upCount = count + 1;
    setCount(upCount);
  }

  function decrement() {
    console.log("1 감소");
    // 상태 업데이트 로직
    let downCount = count - 1;
    setCount(downCount);
  }

  function reset() {
    console.log("0으로 초기화");
    // 상태 업데이트 로직
    let resetCount = 0;
    setCount(resetCount);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">카운터: {count}</h2>
      <div className="flex gap-4">
        <button
          onClick={() => {
            increment();
          }}
          className="bg-blue-500  text-white px-6 py-2 cursor-pointer"
        >
          +1
        </button>
        <button
          onClick={() => {
            decrement();
          }}
          className="bg-red-500  text-white px-6 py-2 cursor-pointer"
        >
          -1
        </button>
        <button
          onClick={() => {
            reset();
          }}
          className="bg-gray-500  text-white px-6 py-2 cursor-pointer"
        >
          0으로 초기화
        </button>
      </div>
    </div>
  );
}
