<template>
  <mf-space>
    <mf-tag closable @close="handleClick" v-show="tagShow">Deafult</mf-tag>
    <mf-tag type="primary" closable>Primary</mf-tag>
    <mf-tag type="success" closable>Success</mf-tag>
  </mf-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const tagShow = ref(true)
const handleClick = () => {
  tagShow.value = false
  setTimeout(() => {
    tagShow.value = true
  }, 2000)
}
</script>
