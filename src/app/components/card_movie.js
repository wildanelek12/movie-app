import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardMovie({ movie }) {
  console.log(movie);
  return (
    <Link href={`/movies/${movie.id}`} key={movie.id}>
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
            ⭐ {movie?.vote_average?.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
}
