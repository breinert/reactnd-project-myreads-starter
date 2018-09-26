import React from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* shelves for the books on the mainpage */}
            <Shelf moveShelf={this.props.moveShelf} name="Currently Reading" books={this.props.books.filter(book => book.shelf === "currentlyReading")} />
            <Shelf moveShelf={this.props.moveShelf} name="Want To Read" books={this.props.books.filter(book => book.shelf === "wantToRead")} />
            <Shelf moveShelf={this.props.moveShelf} name="Read" books={this.props.books.filter(book => book.shelf === "read")} />
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
}
