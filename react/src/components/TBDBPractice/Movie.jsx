import React from "react";

export default function Movie({ movie }) {
  return (
    <div>
      <h2>영화 제목: {movie["title"]}</h2>
      <p>영화 줄거리: {movie["overview"]}</p>
      <p>영화 개봉일: {movie["release_date"]}</p>
      <p>영화 평점: {movie["vote_average"]}</p>
      <hr />
    </div>
  );
}
