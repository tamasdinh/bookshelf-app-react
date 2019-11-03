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
              backgroundImage: `url(${this.props.style.backgroundImage})`}}>
          </div>
          <BookShelfChanger />
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>     
    )
  }
}

export default Book