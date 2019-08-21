import axios from 'axios';

class ReviewService {
  constructor() {
    this.reviews = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }

  addReview(id, newReview) {
    return this.reviews.post(`/api/books/${id}/addreview`, newReview)
    .then(response => response)
  };

  getReviews(id) {
    return this.reviews.get(`/api/books/${id}/reviews`)
    .then(response => response)
  };
  
}

const reviewService = new ReviewService();

export default reviewService