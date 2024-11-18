"use client";
import CardMovie from "@/app/components/card_movie";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Popular() {
  const [popularMovies, setPopularMovies] = useState([]);

  async function fetchMovies(type) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}movie/${type}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    setPopularMovies(data.results);
  }

  useEffect(() => {
    fetchMovies("popular");
  }, []);
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Movie List */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Popular Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {popularMovies.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}
