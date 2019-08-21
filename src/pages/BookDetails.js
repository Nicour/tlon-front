import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Navbar from '../components/Navabr'

import bookService from '../services/books-service'
import reviewServide from '../services/review-service'

import withAuth from '../components/withAuth.js';

class BookDetails extends Component {

  state = {
    name: '',
    author: '',
    editorial: '',
    image: '',
    category: '',
    reviews:[],
    review: '',
    redirect: false
  };

  componentDidMount() {
    const id = this.props.match.params.id
    bookService.getOneBook(id)
      .then(response => {
        this.setState({
          name: response.data.name,
          author: response.data.author,
          editorial: response.data.editorial,
          image: response.data.image,
          category: response.data.category,
          reviews: response.data.reviews,
        })
      })
  }

  handleOneChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    const {review} = this.state;
    const {id} = this.props.match.params
    event.preventDefault();
    reviewServide.addReview(id, {
      review
    })
      .then(response => {
        this.setState ({
          redirect: true
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const id = this.props.match.params.id
    const {redirect, reviews} = this.state;
    return (
      <div> 
        <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <section className="list-container">
          <article className="book-container">
            <div className="book-img">
              <img src={this.state.image} alt=""/>
            </div>
            <div className="book-info">
              <h4>{this.state.name}</h4>
              <p>{this.state.author}</p>
              <p>{this.state.editorial}</p>
              <p>{this.state.category}</p>
            </div>
            <div className="delete-img">
              <Link to={`/books/${id}/update`}><img src="../../icons8-lazo-marcapáginas-100.png" alt=""/></Link>
              <img src="../../edit.png" alt="Edit Button"/>
            </div>
          </article> 
          <form onSubmit={this.handleSubmit} className="review">
            <h4>Add a review</h4>
            <textarea name="review" id="review" cols="30" rows="10" className="review-form" onChange={this.handleOneChange} placeholder="Write your review" required></textarea>
            <button type="submit" className="button">Add your review</button>
          </form>
          {redirect ? window.location.reload() : null}
          <section className="reviews-list">
            <h4>Reviews</h4>
            {reviews.length > 0 ? reviews.map((oneReview) => {
              return (
                <article className="book-container" key={oneReview._id}>
                  <p>{oneReview.review}</p>
                </article>
              )
            }) : <div className="loader">Loading...</div>}
          </section>
      </section>
      </div>
    );
  }
}

export default withAuth(BookDetails)

