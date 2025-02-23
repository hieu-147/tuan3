<!-- views/EditBook.vue -->
<template>
  <div class="container">
    <h2>Chỉnh Sửa Sách</h2>
    <form @submit.prevent="updateBook">
      <label>Tiêu đề:</label>
      <input v-model="book.title" required @input="checkChanges" />

      <label>Tác giả:</label>
      <input v-model="book.author" required @input="checkChanges" />

      <button type="submit" :disabled="!hasChanges">Lưu</button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useBookStore } from '../store/bookStore';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const bookStore = useBookStore();
    const book = ref({ title: '', author: '' });
    const originalBook = ref({ title: '', author: '' });

    onMounted(async () => {
      // Nếu store chưa có dữ liệu, load chúng
      if (!bookStore.books.length) {
        await bookStore.loadBooks();
      }
      const id = route.params.id;
      const selectedBook = bookStore.books.find(b => String(b.id) === id);
      if (selectedBook) {
        book.value = { ...selectedBook };
        originalBook.value = { ...selectedBook };
      }
    });

    const hasChanges = computed(() => {
      return book.value.title !== originalBook.value.title ||
             book.value.author !== originalBook.value.author;
    });

    const updateBook = async () => {
      if (!hasChanges.value) return;
      const id = route.params.id;
      await bookStore.updateBook(id, book.value);
      router.push('/books');
    };

    const checkChanges = () => {
      // Hàm này có thể dùng để kích hoạt kiểm tra nếu cần xử lý thêm
    };

    return { book, updateBook, hasChanges, checkChanges };
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
  background-color: #ff9800;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
