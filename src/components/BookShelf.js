import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
      <div className='bookshelf'>
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <Book
          title='To Kill a Mockingbird'
          authors='Harper Lee'
          style={{
            width: 128,
            height: 193,
            backgroundImage: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
          }}
          />
      </div>
    )
  }
}

export default BookShelf