import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);  // Khởi tạo ứng dụng Vue

app.use(pinia); // Kích hoạt Pinia 
app.use(router);  // Đăng ký Vue Router
app.mount('#app');  // Mount ứng dụng vào DOM
