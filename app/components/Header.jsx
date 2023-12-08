"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const [searchText, setSearchText] = React.useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText){
      router.push(`/movies/search?query=${searchText}`)
    }
  };

  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Cine-You-Match
          </a>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="d-flex"
            role="search"
          >
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
