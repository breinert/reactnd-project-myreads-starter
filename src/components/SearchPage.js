import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import Shelf from './Shelf'

export default class SearchPage extends React.Component {
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchedBooks(query);
  }

  updateSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks });
        }
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="./" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* {this.state.searchedBooks.map(searchedBook => {
              let shelf = "none";
              this.props.books.map(book => (
                book.id === searchedBook.id ?
                shelf = book.shelf :
                ''
              ));
              return (
                <div key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    moveShelf={this.moveShelf}
                    // shelf={this.props.shelf}
                  />
                </div>
              );
            })
            } */}
            {
              this.state.searchedBooks.map((book, key) => <Book moveShelf={this.moveShelf} book={book} key={key} />)
          }
          </ol>
        </div>
      </div>
    );
  }
}