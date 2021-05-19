import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import BookList from "../components/BookList";

const Home = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookList books={props.books} switchShelf={props.switchShelf} />
      <div className="open-search">
        {/* <button> */}
        <Link to="/search">Search</Link>
        {/* </button> */}
      </div>
    </div>
  );
};

Home.propTypes = {
  books: propTypes.array.isRequired,
  switchShelf: propTypes.func.isRequired,
};

export default Home;
