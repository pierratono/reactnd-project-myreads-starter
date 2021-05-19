import React from "react";
import PropTypes from "prop-types";

function ShelfSwitcher(props) {
  const { book, books, switchShelf } = props;

  const updateShelf = (event) => switchShelf(book, event.target.value);
  let currentShelf = "none";

  for (let item of books) {
    if (item.id === book.id) {
      currentShelf = item.shelf;
      break;
    }
  }

  return (
    <div className="book-shelf-changer">
      <select onChange={updateShelf} defaultValue={currentShelf}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

ShelfSwitcher.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  switchShelf: PropTypes.func.isRequired,
};

export default ShelfSwitcher;
