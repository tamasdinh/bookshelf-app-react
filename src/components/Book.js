import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: this.props.style.width,
              height:this.props.style.height,
              backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`}}>
          </div>
          <BookShelfChanger
            book={this.props.book}
            style={this.props.style}
            updateCategory={this.props.updateCategory}/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{(this.props.book.authors) ? [...this.props.book.authors].join(', ') : ''}</div>
      </div>     
    )
  }
}

export default Book