<template>
  <div>
    <h1>Quản lý Sách</h1>
    <nav>
      <router-link to="/"> Trang Chủ</router-link> |
    </nav>
    <BookList />
  </div>
</template>

<script>
import BookList from '../components/BookList.vue';

export default {
  components: {
    BookList
  }
};
</script>

<style scoped>
nav {
  margin-bottom: 15px;
}
nav a {
  text-decoration: none;
  padding: 8px;
  background: #42b983;
  color: white;
  border-radius: 5px;
  margin-right: 10px;
}
nav a:hover {
  background: #2c9a7f;
}
</style>
