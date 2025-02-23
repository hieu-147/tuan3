// store/bookStore.js
import { defineStore } from 'pinia';
import { getBooksAPI, addBookAPI, updateBookAPI, deleteBookAPI } from '../services/api';

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: []
  }),
  actions: {
    async loadBooks() {
      try {
        const response = await getBooksAPI();
        this.books = response.data; // Giả sử API trả về mảng các sách
      } catch (error) {
        console.error('Lỗi khi tải danh sách sách:', error);
      }
    },
    async addBook(book) {
      try {
        const response = await addBookAPI(book);
        // Thêm sách mới vào store, giả sử API trả về sách được tạo kèm id
        this.books.push(response.data);
      } catch (error) {
        console.error('Lỗi khi thêm sách:', error);
      }
    },
    async updateBook(id, updatedBook) {
      try {
        await updateBookAPI(id, updatedBook);
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
          this.books[index] = { ...updatedBook, id }; // cập nhật lại sách
        }
      } catch (error) {
        console.error('Lỗi khi cập nhật sách:', error);
      }
    },
    async removeBook(id) {
      try {
        await deleteBookAPI(id);
        this.books = this.books.filter(book => book.id !== id);
      } catch (error) {
        console.error('Lỗi khi xóa sách:', error);
      }
    }
  }
});
