import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

export default function Container() {
  const [posts, setPosts] = useState([]); // 상품 목록 상태
  const [skip, setSkip] = useState(0); // 상품 시작 인덱스 상태
  const LIMIT = 5; // 한 페이지에 표시할 상품 수
  const LAST = 250; // 마지막 페이지 번호

  useEffect(() => {
    async function fetchPosts() {
      // 적절한 요청 URL을 작성한다
      // 페이지네이션
      const response = await axios.get(
        `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`
      );
      setPosts(response["data"]["posts"]);
    }
    fetchPosts(); // 함수 호출(실행)
  }, [skip]);

  // 적절한 함수를 작성한다
  // 첫 페이지 호출
  function handleFirstClick() {
    setSkip(0); // skip을 0으로 하면 첫 페이지
  }

  // 이전 페이지 호출
  function handlePrevClick() {
    let skipPrev = skip - LIMIT;
    setSkip(skipPrev);
  }

  // 다음 페이지 호출
  function handleNextClick() {
    let skipNext = skip + LIMIT;
    setSkip(skipNext);
  }

  // 마지막 페이지 호출
  function handleLastClick() {
    setSkip(LAST);
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => {
            handleFirstClick();
          }}
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
        >
          처음으로
        </button>
        <button
          onClick={() => {
            handlePrevClick();
          }}
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
        >
          이전
        </button>
        <button
          onClick={() => {
            handleNextClick();
          }}
          className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
        >
          다음
        </button>
        <button
          onClick={() => {
            handleLastClick();
          }}
          className="bg-gray-500 text-white px-3 py-1 cursor-pointer"
        >
          마지막으로
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post["id"]} post={post} />
        ))}
      </div>
    </div>
  );
}
