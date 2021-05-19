import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function Books(props) {
  const { books, switchShelf } = props;
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <Book key={book.id} book={book} books={books} switchShelf={switchShelf} />
      ))}
    </ol>
  );
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
  switchShelf: PropTypes.func.isRequired,
};

export default Books;
