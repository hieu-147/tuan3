<template>
  <h2>Form</h2>
  <div>
    <input type="text" v-model="name" placeholder="Nhập tên của bạn" />
    <p>Chào, {{ name }}!</p>
  </div>

  <div>
    <input type="checkbox" v-model="isChecked">
    <p>Trạng thái: {{ isChecked ? "Đã chọn" : "Chưa chọn" }}</p>
  </div>

  <div>
    <input type="radio" v-model="gender" value="Nam"> Nam
    <input type="radio" v-model="gender" value="Nữ"> Nữ
    <p>Giới tính đã chọn: {{ gender }}</p>
  </div>

  <div>
    <select v-model="selectedCity">
      <option value="Hà Nội">Hà Nội</option>
      <option value="Hồ Chí Minh">Hồ Chí Minh</option>
    </select>
    <p>Thành phố đã chọn: {{ selectedCity }}</p>
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: '',
      isChecked: false,
      gender: "",
      selectedCity: "",
    }
  }
}
</script>

<style scoped>
div{
  border: 1px solid;
  margin-bottom: 15px
}
input{
  margin-top: 15px
}
select{
  margin-top: 15px
}
</style>