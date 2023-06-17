/* eslint-disable react/prop-types */
import { MdArrowDropDownCircle } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import "./BookCard.css";
import { useContext, useState } from "react";
import { BookContext } from "../../contexts/bookContext";
export const BookCard = ({ id, coverUrl, author, name, category }) => {
  const { setBooks } = useContext(BookContext);
  const [showOptions, setShowOptions] = useState(false);

  const updateCategory = (id, category) => {
    setBooks((prev) =>
      prev.map((book) => {
        if (book.id === id) {
          return { ...book, category };
        } else {
          return book;
        }
      })
    );
  };

  return (
    <div className="book-card" key={id}>
      <img className="book-cover" src={coverUrl} alt="book cover" />
      <p className="book-name">{name}</p>
      <small>{author}</small>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="dropdown-btn"
      >
        <MdArrowDropDownCircle size={30} />
        {showOptions && (
          <div className="category-options">
            <span onClick={() => updateCategory(id, "none")}>
              {category === "none" && <TiTick />}
              None
            </span>
            <span onClick={() => updateCategory(id, "currentlyReading")}>
              {category === "currentlyReading" && <TiTick />}Currently Reading
            </span>
            <span onClick={() => updateCategory(id, "wantToRead")}>
              {category === "wantToRead" && <TiTick />}Want to Read
            </span>
            <span onClick={() => updateCategory(id, "read")}>
              {category === "read" && <TiTick />}Read
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
