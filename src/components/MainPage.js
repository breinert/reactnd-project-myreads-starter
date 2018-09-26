import React from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

const MainPage = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/* shelves for the books on the mainpage */}
          <Shelf moveShelf={props.moveShelf} name="Currently Reading" books={props.books.filter(book => book.shelf === "currentlyReading")} />
          <Shelf moveShelf={props.moveShelf} name="Want To Read" books={props.books.filter(book => book.shelf === "wantToRead")} />
          <Shelf moveShelf={props.moveShelf} name="Read" books={props.books.filter(book => book.shelf === "read")} />
        </div>
      </div>
      <div className="open-search">
        <Link
          to="/search"
          className="open-search"
          >Add a book</Link>
      </div>
    </div>
  )
}
export default MainPage
