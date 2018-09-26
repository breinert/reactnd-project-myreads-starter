import React from 'react'

const Book = (props) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks ? props.book.imageLinks.thumbnail : ''})` }}></div>
          <div className="book-shelf-changer">
            <select
              // assign shelf to book; if book is not on a shelf, asign 'none'
              value={props.book.shelf || props.currentShelf || "none"}
              // call fucntion to move the book to or between shelves
              onChange={(event) => props.moveShelf(
                props.book, event.target.value
              )}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors && props.book.authors[0] || 'No Authors'}</div>
      </div>
    </li>
  )
}
export default Book
