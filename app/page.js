import { getTreandingMovies } from "@/utils/requests";
import Image from "next/image";
import Card from "./components/Card";

export default async function HomePage() {
  const movies = await getTreandingMovies();
  return (
    <div className="container my-3">
      <h1>Top Trending Movies</h1>
      <div className="d-flex flex-wrap gap-3">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
