<template>
  <div>
    <mf-button type="primary" @click="handleClick">不准点!</mf-button>
    <mf-button strong :disabled="btnDisabled">可以点!</mf-button>
    <mf-button type="success" strong disabled>以点!</mf-button>
    <mf-button type="info" dashed ghost disabled>点!</mf-button>
    <mf-button type="warning" disabled>!</mf-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const btnDisabled = ref(false)
const handleClick = () => (btnDisabled.value = !btnDisabled.value)
</script>
