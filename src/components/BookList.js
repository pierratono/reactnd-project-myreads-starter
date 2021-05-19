import React from "react";
import PropTypes from "prop-types";
import * as constants from "../constants";
import Books from "./Books";

const BookList = (props) => {
  const { books, switchShelf } = props;

  return (
    <div className="list-books-content">
      {constants.shelfTypes.map((shelfType, index) => {
        const bookShelf = books.filter((book) => book.shelf === shelfType.type);
        return (
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelfType.title}</h2>
            <div className="bookshelf-books">
              <Books books={bookShelf} switchShelf={switchShelf} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  switchShelf: PropTypes.func.isRequired,
};

export default BookList;
