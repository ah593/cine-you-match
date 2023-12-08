import Link from "next/link";
import React from "react";
import MovieDetailsPage from "../movies/[id]/page";

function Card({ movie }) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  return (
    <div>
      <Link className="text-decoration-none" href={"/movies/" + movie.id}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={IMAGE_BASE_URL + movie.poster_path}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p
              className="card-text overflow-y-auto"
              style={{ height: "150px" }}
            >
              {movie.overview}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
