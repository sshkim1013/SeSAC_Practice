import React from "react";

export default function Product({ product }) {
  return (
    <div className="border p-4">
      <h3 className="text-lg font-bold mb-2">{product["title"]}</h3>
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div className="space-y-1">
          <p>id: {product["id"]}</p>
          <p>평점: {product["rating"]}</p>
          <p>카테고리: {product["category"]}</p>
        </div>
        <div className="space-y-1">
          <p>가격: {product["price"]}</p>
          <p>재고: {product["stock"]}</p>
          <p>브랜드: {product["brand"]}</p>
        </div>
      </div>
      <p>{product["description"]}</p>
    </div>
  );
}
