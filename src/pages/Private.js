import React, { Component } from 'react'
import { Link } from "react-router-dom";
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
            {/* <Link to='/books/create'>
              <button>
                Create a new Book
              </button>
            </Link>  */}
            {books.length > 0 ? books.map((book) => {
              return (
                <article key={book._id} className="book-container">
                  <div className="book-img">
                    <img src={book.image} alt={book.name}/>
                  </div>
                  <div className="book-info">
                    <h4>{book.name}</h4>
                    <p>{book.author}</p>
                    <p>{book.editorial}</p>
                    <p>{book.category}</p>
                    {/* <button onClick={() => {this.handleDeleteClick(book._id)}}>Delete</button> */}
                  </div>
                </article>
              )
            }) : <div className="loader">Loading...</div>}
          </section>
        </div>
      );
    }
  }


//       <div>
//         <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />
//       </div>
//     )
//   }
// }

export default withAuth(Private);