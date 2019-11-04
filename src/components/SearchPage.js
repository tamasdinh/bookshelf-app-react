import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
  }

  render() {

    const filterBooks = (array, query) => (
      array.filter((book) => (
        book.title.toString().toLowerCase().includes(query.toLowerCase()) ||
        book.authors.toString().toLowerCase().includes(query.toLowerCase())
        ))
    )

    const booksToShow = (this.state.query === '')
    ? []
    : filterBooks(this.props.books, this.state.query)

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to='/'
              className='close-search'>
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
              {booksToShow.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    style={{
                      width: 128,
                      height: 193}}
                    updateCategory={this.props.updateCategory}
                  />
                </li>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage