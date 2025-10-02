import { useState } from "react";
import axios from "axios";
import Movie from "./Movie";

// BASE_URL 과 API_KEY 를 선언하고, 적절한 값을 할당한다
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieSearch() {
  // 검색 결과와 검색어를 관리할 적절한 상태를 생성한다
  const [movies, setMovies] = useState([]);
  const [keywords, setKeywords] = useState("");

  // onSubmit 이벤트와 onChange 이벤트의 핸들러 함수를 정의한다
  async function handleSubmit(event) {
    event.preventDefault();

    const config = {
      method: "GET",
      url: `${BASE_URL}/search/movie`,
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        query: keywords,
        language: "ko-KR",
      },
    };

    const response = await axios(config);
    const data = response["data"];
    const results = data["results"];
    setMovies(results);
  }

  function handleChange(event) {
    const target = event["target"];
    setKeywords(target["value"]);
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          // form 태그의 onSubmit 속성에서 실행할 함수를 정의하고, 호출한다
          handleSubmit(event);
        }}
      >
        <input
          className="border"
          type="text"
          value={keywords}
          placeholder="영화 이름"
          onChange={(event) => {
            // input 태그의 onChange 속성에서 실행할 함수를 정의하고, 호출한다
            handleChange(event);
          }}
        />
        <input className="border" type="submit" value="검색" />
      </form>
      <ul>
        {/* Movie 컴포넌트를 활용하여 검색된 영화 데이터를 반복 생성하여 표시 */}
        {movies.map((movie) => {
          return <Movie key={movie["id"]} movie={movie}></Movie>;
        })}
      </ul>
    </div>
  );
}
