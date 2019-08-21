import axios from 'axios';

class BookService {
  constructor() {
    this.books = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  getAllBooks() {
    return this.books.get('/api/books')
    .then(response => response)
  };

  getOneBook(id) {
    return this.books.get(`/api/books/${id}`)
    .then(response => response)
  };
  
  updateOneBook(id, updatedBook) {
   return this.books.put(`/api/books/${id}/update`, updatedBook)
   .then(response => response)
  };

  addOneBook(newBook) {
    return this.books.post(`/api/books/new`, newBook)
    .then(response => response)
  };

  deleteOneBook(id) {
    return this.books.delete(`/api/books/${id}/delete`)
    .then(response => response)
  };
}

const bookService = new BookService();

export default bookService