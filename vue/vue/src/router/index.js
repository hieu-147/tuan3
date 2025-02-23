import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Form from '../views/Form.vue';
import Computed from '../views/Computed.vue';
import Method from '../views/Method.vue';
import Lifecycle from '../views/Lifecycle.vue';
import Counter from '../views/Counter.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/form', component: Form},
  { path: '/computed', component: Computed},
  { path: '/method', component: Method},
  { path: '/lifecycle', component: Lifecycle },
  { path: '/counter', component: Counter } 

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
