import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Books from './BookInfo'
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

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <MainPage books={this.state.books} />
        <nav>
          <Link
            to="/search"
            className="search-books"
            component={SearchPage}
          >Search</Link>
        </nav>
      </div>
    )
  }
}

export default BooksApp
