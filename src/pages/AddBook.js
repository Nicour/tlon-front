import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import bookService from '../services/books-service'
import Navbar from '../components/Navabr'

import withAuth from '../components/withAuth';

class AddBook extends Component {
  state = {
    name: '',
    author: '',
    editorial: '',
    image: '',
    category: 'Essay',
    redirect: false
  }

  handleOneChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    const {name, author, image, editorial, category, rating} = this.state;
    event.preventDefault();
    bookService.addOneBook({
      name, author, image, editorial, category, rating
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
    const {name, author, image, editorial, category, redirect} = this.state;
    return (
      <>
        <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className="log-form">
          <form onSubmit={this.handleSubmit} className="new-book-form">
            <label htmlFor="name">Title</label>
            <input type="text" id='name' onChange={this.handleOneChange} value={name} name='name' required/>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" onChange={this.handleOneChange} value={author} name='author' required/>
            <label htmlFor="price">Editorial</label>
            <input type="text" id="editorial" onChange={this.handleOneChange} value={editorial} name='editorial' required/>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" onChange={this.handleOneChange} value={image} name='image' required/>
            <label htmlFor="category">Category</label>
            <select name="category" onChange={this.handleOneChange} value={category} required>
              <option value="Novel">Novel</option>
              <option value="Short story">Short story</option>
              <option value="Essay">Essay</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Sociology">Sociology</option>
              <option value="History">History</option>
              <option value="Poetry">Poetry</option>
              <option value="Politics">Politics</option>
            </select>
            <button type="submit" className="button">Add new Book</button>
          </form>
          {redirect ? <Redirect to="/private"/> : null}
        </div>
      </>
    )
  }
}

export default withAuth(AddBook);