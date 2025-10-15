import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PATHS from "../constants/paths";

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
      {products.map((product) => {
        return (
          <Link to={PATHS["DUMMY"].getProductDetail(product["id"])}>
            <li key={product["id"]}>
              {product["id"]}. {product["title"]}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
