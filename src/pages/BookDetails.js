import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'

import Navbar from '../components/Navabr'

import auth from '../services/auth-service'

export default class BookDetails extends Component {

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
    auth.getOneBook(id)
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
      auth.getReviews(id)
      .then(response => {
        console.log(response)
        this.setState({
          review: response.data
        })
       console.log('response frontend',response.data)
       console.log(this.state.reviews)
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
    auth.addReview(id, {
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
    console.log(id)
    const {redirect} = this.state;
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
              <Link to={`/books/${id}/update`}><img src="../../edit.png" alt="Edit Button"/></Link>
              <img src="../../icons8-lazo-marcapáginas-100.png" alt=""/>
            </div>
          </article> 
          <form onSubmit={this.handleSubmit} className="review">
            <h4>Add a review</h4>
            <textarea name="review" id="review" cols="30" rows="10" className="review-form" onChange={this.handleOneChange}></textarea>
            <button type="submit" className="button">Add your review</button>
          </form>
          {redirect ? <Redirect to={`/books/${id}`}/> : null}
          <section>
            <h4>Reviews</h4>
            <section className="list-container">
              <article className="book-container" key={this.state.reviews._id}>
                <p>{this.state.reviews}</p>
              </article>
            </section>
          </section>
      </section>
      </div>
    );
  }
}

