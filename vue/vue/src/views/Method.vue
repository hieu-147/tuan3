<template>
  <h2>Method</h2>
  <div>
    <p>Số hiện tại: {{ number }}</p>
    <button @click="increase">Tăng </button>
    <button @click="decrease">Giảm </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    };
  },
  methods: {
    increase() {
      this.number++;
    },
    decrease() {
      this.number--;
    }
  }
}
</script>


<style scoped>
button{
  margin-right: 10px;
  margin-bottom: 15px
}
div{
  border: 1px solid;
  margin-bottom: 15px
}
input{
  margin-top: 15px
}
</style>