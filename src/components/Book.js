import React from 'react'

export default class Book extends React.Component {
  render() {
    const { book } = this.props;
    const { imageLinks, authors, title, shelf } = book;
    let displayedThumbnail = this.props.book.imageLinks ?
    imageLinks.thumbnail :
    '';

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${displayedThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select
                value={shelf}
                onChange={(event) => {this.props.moveShelf(
                  this.props.book, event.target.value
                )}}
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
          <div className="book-authors">{authors}</div>

        </div>
      </li>
    )
  }
}