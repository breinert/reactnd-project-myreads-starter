import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
          books={this.state.books}
          moveShelf={this.moveShelf} />
        )}
          />>
        <nav>
          <Link
            to="/search"
            className="search-books"
            >Search</Link>
          <Route path="/search" render={() => (
            <SearchPage
            books={this.state.books}
            moveShelf={this.moveShelf} />
            )}
          />
        </nav>
      </div>
    )
  }
}

export default BooksApp
