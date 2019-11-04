import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  render() {

    for (let array in Object.values(this.props.books)) {
      console.log(Object.values(array))
    }
    console.log('all arrays:', Object.values(this.props.books))
    
    const concatenate = (arrayOfObjects) => {
      const concatenatedArray = []
      for (let i = 0; i < arrayOfObjects.length; i++) {
        console.log('arrayofObjects:', arrayOfObjects[i])
        concatenatedArray.concat(arrayOfObjects[i])
      }
      return concatenatedArray
    }
    
    const filterBooks = (array, query) => (
      array.filter((book) => (
        Object.values(book).toString().toLowerCase().includes(query.toLowerCase())
        ))
    )
    console.log(concatenate(this.props.books))
    console.log('Filter:', filterBooks(concatenate(this.props.books), this.state.query))

    const booksToShow = (this.state.query === '')
    ? []
    : filterBooks(concatenate(this.props.books), this.state.query)

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

/*

*/