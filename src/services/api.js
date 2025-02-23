// services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/books';

export const getBooksAPI = () => axios.get(API_URL);
export const addBookAPI = (book) => axios.post(API_URL, book);
export const updateBookAPI = (id, book) => axios.put(`${API_URL}/${id}`, book);
export const deleteBookAPI = (id) => axios.delete(`${API_URL}/${id}`);
