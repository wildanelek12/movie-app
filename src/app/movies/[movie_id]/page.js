"use client";
import { useEffect, useState } from "react";

export default function MovieDetail({ params }) {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMovie() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}movie/${params.movie_id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`
    );
    const data = await response.json();
    setMovie(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Movie Details */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold">{movie.title}</h2>
            <p className="text-xl text-gray-400 mb-4">
              {movie.release_date} • ⭐ {movie.vote_average.toFixed(1)}
            </p>
            <h3 className="text-2xl font-semibold mb-2">Overview:</h3>
            <p className="text-gray-300">{movie.overview}</p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">Genres:</h4>
              <ul className="flex space-x-4">
                {movie.genres.map((genre) => (
                  <li
                    key={genre.id}
                    className="bg-gray-700 text-sm px-3 py-1 rounded-full"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
