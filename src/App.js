import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './components/SearchPage'
import MainPage from './components/MainPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  // load the book data
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  // function to move books between shelves
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });

    // BooksAPI.getAll().then((books) => {
    //   this.setState({ books })
    // })
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
          books={this.state.books}
          moveShelf={this.moveShelf}
          />
        )}
        />
        <Route path="/search" render={() => (
          <SearchPage
          books={this.state.books}
          moveShelf={this.moveShelf}
          />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
