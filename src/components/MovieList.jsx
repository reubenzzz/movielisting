import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </div>
  );
}
