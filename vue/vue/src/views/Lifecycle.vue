<script setup>
  import { ref, onMounted, onUpdated, onUnmounted } from 'vue';

  const count = ref(null);

  const initialValue = ref('');

  const setCount = () => {
    count.value = Number(initialValue.value) || 0; 
  };

  onMounted(() => {
    console.log('onMounted: Component đã được tạo');
  });

  onUpdated(() => {
    console.log('onUpdated: count đã thay đổi:', count.value);
  });

  onUnmounted(() => {
    console.log('onUnmounted: Component bị xóa khỏi DOM');
  });
</script>

<template>
  <h2>Lifecycle Hooks</h2>
  
  <input v-model="initialValue" placeholder="Tạo giá trị: " /> <br>
  <button @click="setCount">Đặt giá trị</button>

  <div v-if="count !== null">
    <p>Giá trị count: {{ count }}</p>
    <button @click="count++">Tăng</button>
    <button @click="count--">Giảm</button>
  </div>
</template>

<style scoped>
button {
  margin-right: 10px;
  margin-bottom: 15px;
}
div {
  border: 1px solid;
  margin-bottom: 15px;
  padding: 10px;
}
input {
  margin-top: 15px;
  margin-right: 10px;
  margin-bottom: 15px;
}
</style>
