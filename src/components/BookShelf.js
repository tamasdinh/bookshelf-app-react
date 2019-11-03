import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
      <div className='bookshelf'>
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li>
                <Book
                  title={book.title}
                  authors={[...book.authors].join(', ')}
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: book.image}}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf