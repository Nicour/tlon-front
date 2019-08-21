import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import bookService from '../services/books-service'

import Navbar from '../components/Navabr'

import withAuth from '../components/withAuth';

class UpdateBook extends Component {
  state = {
    book:{},
    loading: true,
    redirect: false
  }
  
  componentDidMount(){
    const {id} = this.props.match.params
    bookService.getOneBook(id)
      .then(book=>{
        for(let key in book.data){
          this.setState({[key]: book.data[key]})
        }
        this.setState({
          loading: false
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
    const {name, author, image, editorial, category} = this.state;
    event.preventDefault();
    const {id} = this.props.match.params
    bookService.updateOneBook(id,{
      name, author, image, editorial, category,
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
          {!this.state.loading &&  <form onSubmit={this.handleSubmit} className="new-book-form">
            <label htmlFor="name">Title</label>
            <input type="text" id='name' onChange={this.handleOneChange} value={name} name='name'/>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" onChange={this.handleOneChange} value={author} name='author'/>
            <label htmlFor="price">Editorial</label>
            <input type="text" id="editorial" onChange={this.handleOneChange} value={editorial} name='editorial'/>
            <label htmlFor="image">Image</label>
            <input type="text" id="image" onChange={this.handlaeOneChange} value={image} name='image'/>
            <label htmlFor="category">Category</label>
            <select name="category" onChange={this.handleOneChange} value={category}>
              <option value="Novel">Novel</option>
              <option value="Short story">Short story</option>
              <option value="Essay">Essay</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Sociology">Sociology</option>
              <option value="History">History</option>
              <option value="Poetry">Poetry</option>
              <option value="Politics">Politics</option>
            </select>
            <button type="submit" className="button">Update book</button>
          </form>}
        
          {redirect ? <Redirect to={``}/> : null}
        </div>
      </>
    )
  }
}

export default withAuth(UpdateBook);