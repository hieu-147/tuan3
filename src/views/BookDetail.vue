<!-- views/BookDetail.vue -->
<template>
  <div class="detail-container">
    <h2>Chi tiết Sách</h2>
    <div class="book-info" v-if="book">
      <p><strong>Tiêu đề:</strong> {{ book.title }}</p>
      <p><strong>Tác giả:</strong> {{ book.author }}</p>
    </div>
    <button @click="$router.push('/books')">Quay lại</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useBookStore } from '../store/bookStore';

export default {
  setup() {
    const bookStore = useBookStore();
    const route = useRoute();
    const book = ref(null);

    onMounted(async () => {
      // Nếu store chưa có dữ liệu, load chúng
      if (!bookStore.books.length) {
        await bookStore.loadBooks();
      }
      const id = route.params.id;
      book.value = bookStore.books.find(b => String(b.id) === id);
    });

    return { book };
  }
};
</script>

<style scoped>
.detail-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  color: #333;
}

.book-info {
  text-align: left;
  margin: 20px 0;
}

.book-info p {
  font-size: 18px;
  margin: 10px 0;
}

button {
  background: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #2c9a7f;
}
</style>
