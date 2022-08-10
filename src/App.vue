<script setup lang="ts">
import Header from './views/home/Header.vue'
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
section {
  display: flex;
}
</style>
