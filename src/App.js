import React from 'react';
import './App.css';
import BookShelf from './components/BookShelf'
import Clock from './components/Clock'
import * as booksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
    showSearchPage: false
  }
  
  initializeShelves = function (book) {
    const bookItem = {
      title: book.title,
      authors: [...book.authors].join(', '),
      image: book.imageLinks.smallThumbnail,
      id: book.id,
      shelf: book.shelf
    }

    switch (book.shelf) {
      case "currentlyReading":
        this.setState((currentState) => ({
          currentlyReading: currentState.currentlyReading.concat([{...bookItem}])
        }));
        break;
      case "wantToRead":
        this.setState((currentState) => ({
          wantToRead: currentState.wantToRead.concat([{...bookItem}])
        }));
        break;
      case "read":
        this.setState((currentState) => ({
          read: currentState.read.concat([{...bookItem}])
        }));
        break;
      default:
        return null;
    }
  }

  updateCategory = (book, newCategory) => {
    booksAPI.update(book, newCategory)
    .then(
      this.setState((currentState) => ({
        [book.shelf]: currentState[book.shelf].filter((inBook) => inBook.id !== book.id),
        [newCategory]: currentState[newCategory].concat([book])
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
        books.map((book) => this.initializeShelves(book, this.state))
      })
  }

  render() {
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads App</h1>
          <Clock/>
        </div>
        <BookShelf title='Currently reading' books={this.state.currentlyReading} updateCategory={this.updateCategory}/>
        <BookShelf title='Must read' books={this.state.wantToRead} updateCategory={this.updateCategory}/>
        <BookShelf title='Read' books={this.state.read} updateCategory={this.updateCategory}/>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default BooksApp;
