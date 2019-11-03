import React from 'react';
import './App.css';
import BookShelf from './components/BookShelf'
import Clock from './components/Clock'
import * as booksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    currentlyReading: [],
    mustRead: [],
    read: [],
    showSearchPage: false
  }
  
  initializeShelves = function (book) {
    const bookItem = {
      title: book.title,
      authors: book.authors,
      image: book.imageLinks.smallThumbnail,
      id: book.industryIdentifiers[1].identifier
    }
    console.log(bookItem, book.shelf)
    switch (book.shelf) {
      case "currentlyReading":
        this.setState((currentState) => ({
          currentlyReading: currentState.currentlyReading.concat([{...bookItem}])
        }));
        break;
      case "wantToRead":
        this.setState((currentState) => ({
          mustRead: currentState.mustRead.concat([{...bookItem}])
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
  
  componentDidMount() {
    booksAPI.getAll()
      .then((books) => {
        books.map((book) => this.initializeShelves(book, this.state))
      })
      .then(() => console.log(this.state))
  }

  render() {
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads App</h1>
          <Clock/>
        </div>
        <BookShelf title='Currently reading' books={this.state.currentlyReading}/>
        <BookShelf title='Must read' books={this.state.mustRead}/>
        <BookShelf title='Read' books={this.state.read}/>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default BooksApp;
