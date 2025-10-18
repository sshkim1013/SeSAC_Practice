export default function MemoItem({ memo }) {
  return (
    <div className="p-4 bg-white border rounded flex justify-between items-start">
      <div>
        <h4
          className={`font-medium ${
            memo["completed"] ? "line-through text-gray-400" : ""
          }`}
        >
          {memo["title"] || "Untitled"}
        </h4>
        <p className="text-sm text-gray-600 mt-1">{memo["content"]}</p>
      </div>
      <div className="flex gap-2">
        <button className="px-2 py-1 border rounded">완료</button>
        <button className="px-2 py-1 border rounded">삭제</button>
      </div>
    </div>
  );
}
