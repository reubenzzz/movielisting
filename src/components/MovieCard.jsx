export default function MovieCard({ movie }) {
  return (
    <div className="shadow rounded p-2 bg-white">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"} alt={movie.Title} />
      <h3 className="font-bold mt-2">{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}
