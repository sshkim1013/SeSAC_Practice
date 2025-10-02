import { useEffect, useState } from "react";

import axios from "axios";
import Product from "./Product";

export default function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);
  const [order, setOrder] = useState(null);

  function handleClick(sortedBy, order) {
    setSortedBy(sortedBy);
    setOrder(order);
  }

  useEffect(() => {
    async function getAllProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      const data = response["data"];
      const products = data["products"];

      // 상태 데이터를 setProducts(products) 함수를 통해 변경
      setProducts(products);
    }
    getAllProducts();
  }, []);

  // 잘못된 방법을 쓴 거 같다... 왜 되는지도 모르겠다...
  const sortedProducts = products.sort((a, b) => {
    if (order === "asc") {
      return a[sortedBy] - b[sortedBy];
    } else {
      return b[sortedBy] - a[sortedBy];
    }
  });

  return (
    <div>
      <button
        onClick={() => {
          handleClick("id", "asc");
        }}
        className="border bg-blue-500 text-white w-30 px-6 py-2 cursor-pointer"
      >
        ID ↑
      </button>
      <button
        onClick={() => {
          handleClick("id", "desc");
        }}
        name="idDesc"
        className="border bg-blue-500 text-white w-30 px-6 py-2 cursor-pointer"
      >
        ID ↓
      </button>
      <button
        onClick={() => {
          handleClick("price", "asc");
        }}
        className="border bg-green-500 text-white w-30 px-6 py-2 cursor-pointer"
      >
        가격 ↑
      </button>
      <button
        onClick={() => {
          handleClick("price", "desc");
        }}
        className="border bg-green-500 text-white w-30 px-6 py-2 cursor-pointer"
      >
        가격 ↓
      </button>
      <button
        onClick={() => {
          handleClick("rating", "asc");
        }}
        className="border bg-yellow-500 text-white w-30 px-6 py-2 cursor-pointer"
      >
        평점 ↑
      </button>
      <button
        onClick={() => {
          handleClick("rating", "desc");
        }}
        className="border bg-yellow-500 text-white w-30 px-6 py-2 cursor-pointer"
      >
        평점 ↓
      </button>
      {/* 상품 Props 전달 */}
      {sortedProducts.map((product) => {
        return <Product key={product["id"]} product={product}></Product>;
      })}
    </div>
  );
}
