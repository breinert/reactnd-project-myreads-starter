import React from 'react'
import Shelf from './Shelf'
import SearchPage from './SearchPage';
import { Link } from 'react-router-dom'

export default class MainPage extends React.Component {

  putBooksOnShelf = (books) => {

    const currently = books.filter(book => book.shelf === 'currentlyReading');
    const want = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');

    return [
      {type: 'Currently Reading', books: currently},
      {type: 'Want To Read', books: want},
      {type: 'Read', books: read}
    ]
  }

  render() {

    const { books } = this.props;
    const shelves = this.putBooksOnShelf(books);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Shelf key={shelf.type} shelf={shelf} />
              ))
            }
          </div>
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="open-search"
            component={SearchPage}
            >Add a book</Link>
        </div>
      </div>
    )
  }
}
