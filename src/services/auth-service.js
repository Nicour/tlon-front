import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  signup(user) {
    const { username, password, email } = user;
    return this.auth.post('/auth/signup', {username, password, email})
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout')
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }

  getAllBooks() {
    return this.auth.get('/api/books')
    .then(response => response)
  };

  getOneBook(id) {
    return this.auth.get(`/api/books/${id}`)
    .then(response => response)
  };

  addReview(id, newReview) {
    return this.auth.post(`/api/books/${id}/addreview`, newReview)
    .then(response => response)
  };

  getReviews(id) {
    console.log(id)
    return this.auth.get(`/api/books/${id}/reviews`)
    .then(response => response)
  };
  
  updateOneBook(id, updatedBook) {
   return this.auth.put(`/api/books/${id}/update`, updatedBook)
   .then(response => response)
  };

  addOneBook(newBook) {
    return this.auth.post(`/api/books/new`, newBook)
    .then(response => response)
  };

  deleteOneBook(id) {
    return this.auth.delete(`/api/books/${id}/delete`)
    .then(response => response)
  };
}

const auth = new AuthService();

export default auth