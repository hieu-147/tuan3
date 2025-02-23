// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import AddBook from '../views/AddBook.vue';
import EditBook from '../views/EditBook.vue';
import BookDetail from '../views/BookDetail.vue';
import BookList from '../components/BookList.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/books/add', component: AddBook },
  { path: '/books/edit/:id', component: EditBook },
  { path: '/books/:id', component: BookDetail },
  { path: '/books', component: BookList }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
