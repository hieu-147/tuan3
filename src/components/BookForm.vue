<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="book.title" placeholder="Tiêu đề sách" required />
    <input v-model="book.author" placeholder="Tác giả" required />
    <button type="submit">{{ isEdit ? "Cập nhật" : "Thêm" }} sách</button>
  </form>
</template>

<script>
import { ref, defineProps, defineEmits } from 'vue';

export default {
  props: {
    modelValue: Object,
    isEdit: Boolean
  },
  emits: ['update:modelValue', 'submit'],
  setup(props, { emit }) {
    const book = ref({ ...props.modelValue });

    const handleSubmit = () => {
      emit('submit', book.value);
    };

    return { book, handleSubmit };
  }
};
</script>
