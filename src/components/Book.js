import React from "react";
import PropTypes from "prop-types";
import ShelfSwitcher from "./ShelfSwitcher";

function Book(props) {
  const { book, books, switchShelf } = props;
  const bookCover =
    book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "noCover";

  const BookAuthors = () =>
    book.authors.map((author, index) => (
      <div className="book-authors" key={index}>
        {author}
      </div>
    ));

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url("${bookCover}")` }}
          />
          <ShelfSwitcher books={books} book={book} switchShelf={switchShelf} />
        </div>
        <div className="book-title">{book.title ? book.title : "N/A"}</div>
        {book.authors && <BookAuthors />}
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  switchShelf: PropTypes.func.isRequired,
};

export default Book;
