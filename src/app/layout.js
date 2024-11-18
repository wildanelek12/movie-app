"use client"; // Mark the component as a Client Component

import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  const pathname = usePathname(); // Now it will work in both Server and Client Components

  const isActive = (path) => pathname === path;

  return (
    <html lang="en">
      <title>TMDB Movies</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
                    href="/popular"
                    className={`hover:text-gray-400 ${
                      isActive("/popular") ? "text-gray-400" : ""
                    }`}
                  >
                    Popular
                  </a>
                </li>
                <li>
                  <a
                    href="/top_rated"
                    className={`hover:text-gray-400 ${
                      isActive("/top_rated") ? "text-gray-400" : ""
                    }`}
                  >
                    Top Rated
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
