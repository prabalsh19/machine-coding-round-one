/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { BookCard } from "../BookCard/BookCard";
import "./Shelve.css";
export const Shelve = ({ heading, books, category }) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <div className="shelve-books-container">
        {books
          .filter((book) => book.category === category)
          .map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
      </div>
    </>
  );
};
