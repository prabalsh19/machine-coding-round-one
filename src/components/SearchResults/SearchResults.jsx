/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";

import { BookCard } from "../BookCard/BookCard";
import "./SearchResults.css";
import { BookContext } from "../../contexts/bookContext";
export const SearchResults = ({ searchQuery }) => {
  const { books } = useContext(BookContext);
  const [searchResults, setSearchResults] = useState();
  useEffect(() => {
    setSearchResults(() =>
      books.filter((book) =>
        book.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, books]);
  return searchQuery === "" ? (
    <h1>Search for your desired books</h1>
  ) : (
    <div className="search-results">
      {searchResults.length === 0 ? (
        <h1>No Book Found</h1>
      ) : (
        searchResults.map((book) => <BookCard key={book.id} {...book} />)
      )}
    </div>
  );
};
