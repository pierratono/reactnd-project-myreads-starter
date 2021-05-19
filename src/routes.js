import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Search from "./pages/Search";

import * as BooksAPI from "./BooksAPI";

const routes = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => setBooks(books));
  }, []);

  const switchShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then((response) => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book and  remove updated book from array
      setBooks((prevState) =>
        prevState
          .filter((book) => book.id !== changedBook.id)
          // add updated array
          .concat(changedBook)
      );
    });
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Home books={books} switchShelf={switchShelf} />}
      />
      <Route
        path="/search"
        render={() => <Search books={books} switchShelf={switchShelf} />}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default routes;
