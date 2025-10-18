import { useEffect, useState } from "react";
import MemoItem from "../components/MemoItem";
import { getAllMemos } from "../api/memoApi";

export default function MemoListPage() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getAllMemos();
      setMemos(data || []);
    }
    load();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">메모 목록</h2>
      <div className="space-y-3">
        {memos.length === 0 ? (
          <p className="text-gray-500">메모가 없습니다.</p>
        ) : (
          memos.map((memo) => <MemoItem key={memo["id"]} memo={memo} />)
        )}
      </div>
    </div>
  );
}
