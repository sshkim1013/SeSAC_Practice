// components/ProductCard/ProductCard.jsx

export default function ProductCard({ product }) {
  const inStock = product["inStock"] ? "재고 있음" : "품절";

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="font-bold text-2xl">{product["name"]}</h2>
      <p>
        <span className="font-bold text-green-700">{product["price"]}</span>
      </p>
      <p>
        {/* {" "} === 공백 나타내기 */}
        재고:{" "}
        <span
          className={product["inStock"] ? "text-green-500" : "text-red-500"}
        >
          {inStock}
        </span>
      </p>
      <p>평점: ⭐{product["rating"]}</p>
      <div className="flex gap-2 flex-wrap mt-4">
        {product["tags"].map((tag) => (
          <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
