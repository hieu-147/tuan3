<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore();
</script>

<template>
  <header>
    <h1>Header - Count: {{ counter.count }}</h1>
  </header>
</template>
