<!-- components/BookList.vue -->
<template>
  <div>
    <h2>Danh sách sách</h2>
    <button class="add-button" @click="$router.push('/books/add')">➕ Thêm Sách</button>
    <table>
      <thead>
        <tr>
          <th>Tiêu đề</th>
          <th>Tác giả</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>
            <router-link :to="`/books/${book.id}`">{{ book.title }}</router-link>
          </td>
          <td>{{ book.author }}</td>
          <td>
            <button @click="$router.push(`/books/edit/${book.id}`)">Chỉnh Sửa</button>
            <button @click="removeBook(book.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useBookStore } from '../store/bookStore';

export default {
  setup() {
    const bookStore = useBookStore();
    onMounted(() => bookStore.loadBooks());
    return {
      books: computed(() => bookStore.books),
      removeBook: bookStore.removeBook
    };
  }
};
</script>

<style scoped>
.add-button {
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
  display: block;
}
.add-button:hover {
  background-color: #36936b;
}
table {
  width: 50%;
  border-collapse: collapse;
  margin-top: 15px;
}
th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
th {
  background-color: #42b983;
  color: white;
}
button {
  margin-right: 5px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
}
button:hover {
  background-color: #36936b;
}
</style>
