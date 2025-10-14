import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const [post, setPost] = useState({});

  const { postId } = useParams();

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`https://dummyjson.com/posts/${postId}`);
      const post = response["data"];
      setPost(post);
    }
    getProduct();
  }, []);

  return (
    <div>
      <br />
      <p>ID: {post["id"]}</p>
      <p>제목: {post["title"]}</p>
    </div>
  );
}
