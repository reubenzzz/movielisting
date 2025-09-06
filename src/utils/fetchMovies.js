const API_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  const res = await fetch(`${API_URL}?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`);
  const data = await res.json();
  return data.Search || [];
};
