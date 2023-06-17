import "./Shelves.css";
import { Shelve } from "../Shelve/Shelve";
import { useContext } from "react";
import { BookContext } from "../../contexts/bookContext";
export const Shelves = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="shelves">
      <Shelve
        books={books}
        heading="Currently Reading"
        category="currentlyReading"
      />
      <Shelve books={books} heading="Want to Read" category="wantToRead" />
      <Shelve books={books} heading="Read" category="read" />
    </div>
  );
};
