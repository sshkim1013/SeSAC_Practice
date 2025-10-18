import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  const navItems = [
    { path: "/", label: "메인 페이지" },
    { path: "/create", label: "메모 작성" },
    { path: "/memos", label: "메모 목록" },
    { path: "/login", label: "로그인" },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item["path"]}
              to={item["path"]}
              className={({ isActive }) =>
                `px-3 py-2 text-sm ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`
              }
            >
              {item["label"]}
            </NavLink>
          ))}
        </div>
      </nav>

      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
