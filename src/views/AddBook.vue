<!-- views/AddBook.vue -->
<template>
  <div class="container">
    <h2>Thêm Sách Mới</h2>
    <form @submit.prevent="addBook">
      <label>Tiêu đề:</label>
      <input v-model="book.title" required />

      <label>Tác giả:</label>
      <input v-model="book.author" required />

      <button type="submit">Lưu</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useBookStore } from '../store/bookStore';

export default {
  setup() {
    const bookStore = useBookStore();
    const router = useRouter();
    const book = ref({ title: '', author: '' });

    const addBook = async () => {
      await bookStore.addBook(book.value);
      router.push('/books'); // Chuyển về trang danh sách sách sau khi thêm
    };

    return { book, addBook };
  }
};
</script>

<style scoped>
.container {
  width: 50%;
  margin: auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #ccc;
}
input {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #36936b;
}
</style>
