/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { books as bookDb } from "../db/db";
export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState(bookDb);

  const value = {
    books,
    setBooks,
  };
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
