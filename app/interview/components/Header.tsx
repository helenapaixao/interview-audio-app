"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-lg fixed top-0 z-10">
      <h1 className="text-lg font-bold">Sistema de Entrevistas</h1>
      <nav>
        <Link
          href="/history"
          className="text-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Ver Histórico
        </Link>
      </nav>
    </header>
  );
};

export default Header;
