import React from 'react'
import Book from './Book'

const Shelf = (props) => {
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{props.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {/* map the books */}
        {props.books.map(book => <Book
          key={book.id}
          book={book}
          moveShelf={props.moveShelf}
          currentShelf={props.name}
          />
        )}
      </ol>
    </div>
  </div>
  )
}
export default Shelf
