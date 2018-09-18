import React from 'react'

export default class Book extends React.Component {
  render() {

    const { book } = this.props;
    const { imageLinks, authors, title, shelf } = book;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select
                onChange={(event) => book.moveShelf(
                  this.props.book, event.target.value
                )}
                value={shelf}
                >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          {authors.map(author => (<div key={author} className="book-authors">{author}</div>))}

        </div>
      </li>
    )
  }
}