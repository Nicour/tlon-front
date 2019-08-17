import React, { Component } from 'react'

import Navbar from '../components/Navabr'

import auth from '../services/auth-service'

export default class BookDetails extends Component {

  state = {
    name:'',
    author: '',
    editoriañ: '',
    image: '',
    category: '',
    rating: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id
    console.log(id)
    auth.getOneBook(id)
      .then(response => {
        console.log(response)
        this.setState({
          name: response.data.name,
          author: response.data.author,
          editorial: response.data.editorial,
          image: response.data.image,
          category: response.data.category,
          rating: response.data.rating,
        })
      })
  }

  render() {
    return (
      <div> 
        <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />
       <h1>{this.state.name}</h1>
      </div>
    );
  }
}

