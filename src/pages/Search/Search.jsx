import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchResults } from "../../components/SearchResults/SearchResults";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults searchQuery={searchQuery} />
    </div>
  );
};
