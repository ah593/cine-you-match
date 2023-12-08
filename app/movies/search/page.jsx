import { getMoviesBySearch } from "@/utils/requests";
import React from "react";
import SearchResults from "../../components/SearchResults";

async function SearchPage({ searchParams }) {
  const searchText = searchParams.query;
  const movies = await getMoviesBySearch(searchText);
  return (
    <SearchResults searchText={searchText} movies={movies}></SearchResults>
  );
}

export default SearchPage;
