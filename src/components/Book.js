import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

  render() {

    const image = (this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail)
      ? this.props.book.imageLinks.smallThumbnail
      : undefined

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: this.props.style.width,
              height:this.props.style.height,
              backgroundImage: `url(${image})`}}>
          </div>
          <BookShelfChanger
            books={this.props.books}
            book={this.props.book}
            style={this.props.style}
            updateCategory={this.props.updateCategory}
            updateState={this.updateState}/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{(this.props.book.authors) ? [...this.props.book.authors].join(', ') : ''}</div>
      </div>     
    )
  }
}

export default Book