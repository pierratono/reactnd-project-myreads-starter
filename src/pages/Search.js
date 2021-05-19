import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import * as BooksAPI from "../BooksAPI";

function Search(props) {
  const { books, switchShelf } = props;

  const [query, setQuery] = useState("");
  const [newBooks, setNewBooks] = useState([]);
  const [errMsg, setErrMsg] = useState(false);

  const getBooks = (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query) {
      BooksAPI.search(query.trim(), 20).then((books) => {
        if (books.length > 0) {
          setNewBooks(books);
          setErrMsg(false);
        } else {
          setNewBooks([]);
          setErrMsg(true);
        }
      });
    } else setErrMsg(false) && setNewBooks([]);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={getBooks}
          />
        </div>
      </div>
      <div className="search-books-results">
        {newBooks.length > 0 && (
          <div>
            <h3>Search returned {newBooks.length} books </h3>
            <ol className="books-grid">
              {newBooks.map((book) => (
                <Book book={book} books={books} key={book.id} switchShelf={switchShelf} />
              ))}
            </ol>
          </div>
        )}
        {errMsg && (
          <>
            <p>
              Your search - <strong>{query}</strong> - did not match any books. Please try
              again!
            </p>
            <p>
              Suggestions:
              <ul>
                <li>Make sure that all words are spelled correctly.</li>
                <li>Try different</li>
                <li>keywords. Try more general keywords.</li>
              </ul>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  switchShelf: PropTypes.func.isRequired,
};

export default Search;
