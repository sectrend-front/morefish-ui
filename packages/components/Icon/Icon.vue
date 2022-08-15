<script setup lang="ts">
// import { ref } from 'vue'
</script>

<template>
  <i class="el-icon">
    <slot />
  </i>
</template>

<style lang="less" scoped>
.el-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: inherit;
}
</style>
