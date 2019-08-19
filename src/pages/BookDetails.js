import React, { Component } from 'react'

import Navbar from '../components/Navabr'

import auth from '../services/auth-service'

export default class BookDetails extends Component {

  state = {
    name:'',
    author: '',
    editorial: '',
    image: '',
    category: '',
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
        })
      })
  }

  render() {
    const id = this.props.match.params.id
    return (
      <div> 
        <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />
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
            <a href={`/books/${id}/update`}><img src="../../edit.png" alt="Edit Button"/></a>
          </div>
        </article> 
      </div>
    );
  }
}

