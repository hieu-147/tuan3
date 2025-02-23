<script setup>
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore(); // Sử dụng store
</script>

<template>
  <div>
    <h2>Quản lý State với Pinia</h2>
    <p>Giá trị count: {{ counter.count }}</p>
    <button @click="counter.increment">Tăng</button>
    <button @click="counter.decrement">Giảm</button>
  </div>
</template>

<style scoped>
button {
  margin-right: 10px;
  margin-top: 10px;
}
</style>
