import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as booksAPI from '../BooksAPI'

class SearchPage extends Component {

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({query})
    if (query) {
      booksAPI.search(query).then((results) => {
      (results.length > 0)
        ? this.setState({ searchResults: results }, () => { if (this.state.query === '') this.setState({searchResults: []})})
        : this.setState({searchResults: []})
      })
    } else {
      this.setState({searchResults: []})
    }
  }

  render() {

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
            <ol className="books-grid">
              {this.state.searchResults.length > 0 && (
                <React.Fragment>
                  {this.state.searchResults.map((book) => (
                    <li key={book.id}>
                      <Book
                        books={this.props.books}
                        book={book}
                        style={{
                          width: 128,
                          height: 193}}
                        updateCategory={this.props.updateCategory}
                        updateState={this.updateState}
                      />
                    </li>
                  ))}
                </React.Fragment>)}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage