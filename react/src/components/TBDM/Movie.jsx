import React from "react";

export default function Movie({ movie }) {
  return (
    <div>
      <ul>
        <li>제목: {movie["title"]}</li>
        <li>줄거리: {movie["overview"]}</li>
        <li>개봉일: {movie["release_date"]}</li>
        <li>평점: {movie["vote_average"]}</li>
        <hr />
      </ul>
    </div>
  );
}
