import { getMovieDetails, getSimilarMovies } from "@/utils/requests";
import React from "react";
import Image from "next/image";

export default async function MovieDetailsPage({ params }) {
  const movieDetails = await getMovieDetails(params.id);
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const similarMovies = await getSimilarMovies(params.id);
  return (
    <div className=" my-4 mx-3">
      <div className="d-flex align-items-center">
        <div className="col-3">
          <img src={IMAGE_BASE_URL + movieDetails.poster_path} alt="" />
        </div>
        <div className="mx-5 ">
          <h3>{movieDetails.title}</h3>
          <div className="d-flex">
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">
              {movieDetails.release_date}
            </p>
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">
              {movieDetails.original_language}
            </p>
            <p className="py-1 px-2 bg-warning text-white me-2 rounded">
              {movieDetails.status}
            </p>
          </div>
          <div>
            <p>
              {movieDetails.genres.map((genre) => {
                return (
                  <span
                    className="mx-1 -1 bg-dark text-white me-2 rounded"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                );
              })}
            </p>
          </div>
          <p>{movieDetails.overview}</p>
        </div>
      </div>
      {/* Similar Movies */}
      <div className="my-3">
        <h2>Similar Movies</h2>
        <div className="d-flex flex-wrap gap-3">
          {similarMovies.map((movie) => {
            return (
              <div className="card" style={{ width: "18rem" }}>
                <img src={IMAGE_BASE_URL + movie.poster_path} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
