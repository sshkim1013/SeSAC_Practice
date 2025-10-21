import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  const navItems = [
    { path: "/signup", label: "회원가입" },
    { path: "/login", label: "로그인" },
    { path: "/", label: "서비스 소개" },
    { path: "/create-memo", label: "메모 생성" },
    { path: "/memolist", label: "메모 목록" },
  ];

  const activeNavItemClass = "border-b-2 border-gray-700 text-gray-900";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          {" "}
          <ul className="flex space-x-4">
            {" "}
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `inline-block py-3 text-sm font-medium ${
                      isActive
                        ? activeNavItemClass
                        : "text-gray-600 hover:text-gray-800"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="flex-1 max-w-6xl mx-auto w-full p-4">
        <Outlet />
      </main>
    </div>
  );
}
