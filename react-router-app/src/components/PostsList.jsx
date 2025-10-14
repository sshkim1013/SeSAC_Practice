import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BASE_URL = "https://dummyjson.com";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      const response = await axios.get(`${BASE_URL}/posts`);
      const data = response["data"];
      const posts = data["posts"];
      setPosts(posts);
    }
    getAllPosts();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <Link to={`/dummy/posts/${post["id"]}`}>
              <li key={post["id"]}>
                {post["id"]}. {post["title"]}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
