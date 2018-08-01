import React from "react";
import { Route, Link } from "react-router-dom";
import MyReads from "./MyReads";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    myBooks: [],
    query: ""
  };
  updateBook(book, shelf) {
    BooksAPI.update(book, shelf);
    let newBooks = this.state.myBooks;
    for (let i = 0; i < this.state.myBooks.length; i++) {
      if (this.state.myBooks[i].id === book.id) {
        newBooks[i].shelf = shelf;
        break;
      }
    }
    let newShowingBooks = this.state.books;
    for (let i = 0; i < this.state.books.length; i++) {
      if (this.state.books[i].id === book.id) {
        newShowingBooks[i].shelf = shelf;
        break;
      }
    }
    this.setState({ myBooks: newBooks, books: newShowingBooks });
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ myBooks: books });
    });
  }
  updateQuery(query) {
    this.setState({ query });
    let showingBooks = [];
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          showingBooks = response.map(b => {
            const indx = this.state.myBooks.findIndex(c => c.id === b.id);
            if (indx >= 0) {
              return this.state.myBooks[indx];
            } else {
              return b;
            }
          });
          this.setState({ books: showingBooks });
        } else {
          this.setState({ books: [] });
        }
      });
    } else {
      this.setState({ books: showingBooks });
    }
  }
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">
                  Close
                </Link>
                <div className="search-books-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={event => this.updateQuery(event.target.value)}
                  />
                </div>
              </div>
              <div className="search-books-results">
                <div className="list-books-content">
                  <div>
                    <BookShelf
                      update={(book, shelf) => {
                        this.updateBook(book, shelf);
                      }}
                      title="All"
                      books={this.state.books}
                    />
                  </div>
                </div>
                <ol className="books-grid" />
              </div>
            </div>
          )}
        />
        <Route exact path="/" render={() => <MyReads />} />
      </div>
    );
  }
}

export default BooksApp;
