import React, { Component } from 'react'

class BookShelfChanger extends Component {

  setCategory = (bookFound) => {
    const match = this.props.books.filter((book) => book.id === bookFound.id)
    if (match.length > 0) {
      return match[0].shelf
    } else {
      return "none"
    }
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.setCategory(this.props.book)} onChange={(event) => {
          this.props.updateCategory(this.props.book, event.target.value)}}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger