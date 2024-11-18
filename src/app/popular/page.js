"use client";
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
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={500}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold truncate">{movie.title}</h3>
                <p className="text-sm text-gray-400">
                  ⭐ {movie.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
