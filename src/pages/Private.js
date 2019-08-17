import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navabr'
import auth from '../services/auth-service'

class Private extends Component {

  state = {
    books:[],
  };

  componentDidMount() {
    auth.getAllBooks()
      .then(response => {
        this.setState({
          books: response.data.listOfBooks
        })
      })
  }

  handleDeleteClick(id) {
    auth.deleteOneBook(id)
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
                <a href={`/books/${book._id}/update`} key={book._id} >
                  <article className="book-container">
                    <div className="book-img">
                      <img src={book.image} alt="Book cover"/>
                    </div>
                    <div className="book-info">
                      <h4>{book.name}</h4>
                      <p>{book.author}</p>
                      <p>{book.editorial}</p>
                      <p>{book.category}</p>
                    </div>
                    <div className="delete-img">
                    <img src="../../delete.png" alt="Delete Button" onClick={() => {this.handleDeleteClick(book._id)}}/>
                    </div>
                  </article>
                </a>
              )
            }) : <div className="loader">Loading...</div>}
          </section>
        </div>
      );
    }
  }

export default withAuth(Private);