import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";

class MyReads extends Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  };
  getAll() {
    let curReading = this.state.books.filter(
      book => book.shelf === "currentlyReading"
    );
    let WantToRead = this.state.books.filter(
      book => book.shelf === "wantToRead"
    );
    let Read = this.state.books.filter(book => book.shelf === "read");
    this.setState({
      currentlyReading: curReading,
      wantToRead: WantToRead,
      read: Read
    });
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
      this.getAll();
    });
  }

  updateState = (book, shelf) => {
    let newBooks = this.state.books;
    for (let i = 0; i < this.state.books.length; i++) {
      if (this.state.books[i].id === book.id) {
        newBooks[i].shelf = shelf;
        break;
      }
    }
    this.setState({ books: newBooks });
  };

  update(book, shelf) {
    BooksAPI.update(book, shelf).then(
      this.updateState(book, shelf),
      this.getAll()
    );
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              title="Currently Reading"
              books={this.state.currentlyReading}
              update={(book, shelf) => {
                this.update(book, shelf);
              }}
            />
            <BookShelf
              title="Want to Read"
              books={this.state.wantToRead}
              update={(book, shelf) => {
                this.update(book, shelf);
              }}
            />
            <BookShelf
              title="Read"
              books={this.state.read}
              update={(book, shelf) => {
                this.update(book, shelf);
              }}
            />
          </div>
        </div>
        <div className="open-search">
          <a href="/search">Add a book</a>
        </div>
      </div>
    );
  }
}

export default MyReads;
