<template>
  <div>
    <h2>Computed</h2>

    <input v-model="message" placeholder="Nhập chuỗi">
    <p>Số ký tự: {{ computedLength }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  computed: {
    computedLength() {
      console.log("Computed đang chạy...");
      return this.message.length; // Chỉ chạy lại khi `message` thay đổi
    }
  }
};
</script>
