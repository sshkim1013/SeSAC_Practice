import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  /*
   { productId: URL상에서 경로 파라미터에 위치한 값}
   */
  const params = useParams();
  const productId = params["productId"];

  // 위의 코드 두 줄을 구조 분해 할당하면 아래와 같다.
  // const { productId } = useParams();

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      const product = response["data"];
      setProduct(product);
    }
    getProduct();
  }, []);

  return (
    <div>
      <br />
      <p>ID: {product["id"]}</p>
      <p>제품명: {product["title"]}</p>
    </div>
  );
}
