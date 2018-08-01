import React, { Component } from "react";

class Book extends Component {
  handleChange(e, book) {
    this.props.update(book, e.target.value);
  }
  render() {
    //console.log(this.props.book.id);
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                "url(" + this.props.book.imageLinks.thumbnail + ")"
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={e => this.handleChange(e, this.props.book)}
              value={this.props.book.shelf ? this.props.book.shelf : "none"}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
