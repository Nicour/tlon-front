import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navabr'
import bookService from '../services/books-service'

class Private extends Component {

  state = {
    books:[],
  };

  componentDidMount() {
    bookService.getAllBooks()
      .then(response => {
        this.setState({
          books: response.data.listOfBooks
        })
      })
  }

  handleDeleteClick(id) {
    bookService.deleteOneBook(id)
     .then(() => {
      const filteredBooks = this.state.books.filter((singleBook) => {
        return singleBook._id !== id
      })
      this.setState({
        books: filteredBooks
      })
    })
  }

  render() {
    const {books} = this.state;
    return (
        <div> 
          <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <section className="list-container">
            {books.length > 0 ? books.map((book) => {
              return (
                <article className="book-container" key={book._id}>
                  <Link to={`/books/${book._id}`} className='book-detail-a'>
                    <div className="book-img">
                      <img src={book.image} alt="Book cover"/>
                    </div>
                    <div className="book-info">
                      <h4>{book.name}</h4>
                      <p>{book.author}</p>
                      {/* <p>{book.editorial}</p>
                      <p>{book.category}</p> */}
                    </div>
                  </Link>
                  <div className="delete-img">
                    <img src="../../favorite.png" alt=""/>
                    <img src="../../delete.png" alt="Delete Button" className="delete" onClick={() => {this.handleDeleteClick(book._id)}}/>
                  </div>
                </article>
              )
            }) : <div className="loader">Loading...</div>}
          </section>
        </div>
      );
    }
  }

export default withAuth(Private);