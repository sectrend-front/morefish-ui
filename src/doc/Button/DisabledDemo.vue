<template>
  <mf-space>
    <mf-button type="primary" @click="handleClick">不准点!</mf-button>
    <mf-button :disabled="btnDisabled">可以点!</mf-button>
    <mf-button type="success" :disabled="btnDisabled">以点!</mf-button>
    <mf-button type="info" dashed ghost :disabled="btnDisabled">点!</mf-button>
    <mf-button type="warning" :disabled="btnDisabled">!</mf-button>
  </mf-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const btnDisabled = ref(true)
const handleClick = () => (btnDisabled.value = !btnDisabled.value)
</script>
