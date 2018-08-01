import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
class Search extends Component {
  state = {
    books: []
  };
  getAll() {
    BooksAPI.search("Android").then(books => {
      this.setState({ books });
      //console.log(this.state.books);
    });
  }
  componentDidMount() {
    this.getAll();
  }
  update(book, shelf) {
    BooksAPI.update(book, shelf);
    this.getAll();
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <div className="list-books-content">
            <div>
              <BookShelf
                update={(book, shelf) => {
                  this.update(book, shelf);
                }}
                title="All"
                books={this.state.books}
              />
            </div>
          </div>
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default Search;
