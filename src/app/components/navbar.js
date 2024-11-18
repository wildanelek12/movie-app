import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname(); // Now it will work in both Server and Client Components

  const isActive = (path) => pathname === path;
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">TMDB Movies</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className={`hover:text-gray-400 ${
                  isActive("/") ? "text-gray-400" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/movies/popular"
                className={`hover:text-gray-400 ${
                  isActive("/movies/popular") ? "text-gray-400" : ""
                }`}
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href="/movies/top_rated"
                className={`hover:text-gray-400 ${
                  isActive("/movies/top_rated") ? "text-gray-400" : ""
                }`}
              >
                Top Rated
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
