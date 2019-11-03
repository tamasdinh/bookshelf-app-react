import React from 'react';
import './App.css';
import BookShelf from './components/BookShelf'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }
  render() {
    return (
      <div>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf title='Currently reading'/>
        <BookShelf title='Must read'/>
        <BookShelf title='Read'/>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default BooksApp;
