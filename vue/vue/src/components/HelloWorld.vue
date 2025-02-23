<template>
  <h1>Hello, {{ name }}!</h1>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('VueJS');
</script>

<style scoped>
h1 { color: blue; }
</style>
