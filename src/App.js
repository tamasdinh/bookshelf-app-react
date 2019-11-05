import React from 'react';
import './App.css';
import BookShelf from './components/BookShelf'
import Clock from './components/Clock'
import * as booksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import SearchPage from './components/SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  updateState = function (book) {
    this.setState((currentState) => ({
      books: currentState.books.concat([book])
    }));
  }

  updateCategory = (book, newCategory) => {
    book.shelf = newCategory
    booksAPI.update(book, newCategory)
    .then(
      this.setState((currentState) => ({
        books: currentState.books.filter((inBook) => inBook.id !== book.id).concat([book]),
      }))
    )
    .catch((error) => {
      alert('An error occurred while writing to the database. Please try again later.')
      console.log('Error', error)
    })
  }
  
  componentDidMount() {
    booksAPI.getAll()
      .then((books) => {
        books.map((book) => this.updateState(book, this.state))
      })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <React.Fragment>
            <div className="list-books-title">
              <h1>MyReads App</h1>
              <Clock/>
            </div>
            <BookShelf
              title='Currently reading'
              books={this.state.books.filter((book) => book.shelf === 'currentlyReading')}
              updateCategory={this.updateCategory}/>
            <BookShelf
              title='Must read'
              books={this.state.books.filter((book) => book.shelf === 'wantToRead')}
              updateCategory={this.updateCategory}/>
            <BookShelf
              title='Read'
              books={this.state.books.filter((book) => book.shelf === 'read')}
              updateCategory={this.updateCategory}/>
            <Link
              to='/search'
              className='open-search'>
              <button>+</button>
            </Link>
          </React.Fragment>
        )}/>
        <Route path='/search' render={() => (
          <SearchPage
            books={this.state.books}
            updateCategory={this.updateCategory}
            updateState={this.updateState}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
