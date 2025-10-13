import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "https://dummyjson.com";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProduct() {
      const response = await axios.get(`${BASE_URL}/products`);
      const data = response["data"];
      const products = data["products"];
      setProducts(products);
    }
    getAllProduct();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product["id"]}>{product["title"]}</li>
      ))}
    </ul>
  );
}
