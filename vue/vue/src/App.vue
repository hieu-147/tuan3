<template>
  <nav>
    <router-link to="/">Trang chủ</router-link>
    <router-link to="/about">Giới thiệu</router-link>
    <router-link to="/form">Form</router-link>
    <router-link to="/computed">Computed</router-link>
    <router-link to="/method">Method</router-link>
    <router-link to="/lifecycle">Lifecycle</router-link>
    <router-link to="/counter">Counter</router-link>
  </nav>
  <router-view></router-view>
</template>

<style>
nav {
  display: flex;
  gap: 15px;
  font-size: 18px;
}
router-link {
  text-decoration: none;
  color: white;
}
router-link:hover {
  text-decoration: underline;
}
</style>


