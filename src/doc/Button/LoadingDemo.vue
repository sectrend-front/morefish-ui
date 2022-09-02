<template>
  <mf-space>
    <mf-button :loading="loadingRef" @click="handleClick">Click me</mf-button>
    <mf-button :loading="loadingRef" type="info" @click="handleClick" circle>
      <template #icon>
        <mf-icon><Setting /></mf-icon>
      </template>
    </mf-button>
    <mf-button :loading="loadingRef" type="danger" @click="handleClick" round>
      <template #icon>
        <mf-icon><Star /></mf-icon>
      </template>
      Click me
    </mf-button>
  </mf-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Star, Setting } from '#/icon'

const loadingRef = ref(false)
const handleClick = () => {
  loadingRef.value = true
  setTimeout(() => {
    loadingRef.value = false
  }, 3000)
}
</script>
