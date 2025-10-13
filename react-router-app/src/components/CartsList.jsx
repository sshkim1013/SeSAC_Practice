import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "https://dummyjson.com";

export default function CartsList() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    async function getAllCarts() {
      const response = await axios.get(`${BASE_URL}/carts`);
      const data = response["data"];
      const carts = data["carts"];
      setCarts(carts);
    }
    getAllCarts();
  }, []);
  return (
    <div>
      <ul>
        {carts.map((cart) => (
          <li key={cart["id"]}>{cart["id"]}</li>
        ))}
      </ul>
    </div>
  );
}
