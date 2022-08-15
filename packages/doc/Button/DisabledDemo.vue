<script setup lang="ts">
const handleClick = (): void => {
  console.log('da mie!')
}
</script>

<template>
  <div>
    <mf-button type="primary" @click="handleClick">不准点!</mf-button>
    <mf-button strong disabled>可以点!</mf-button>
    <mf-button type="success" strong disabled @click="handleClick">以点!</mf-button>
    <mf-button type="info" dashed ghost disabled @click="handleClick">点!</mf-button>
    <mf-button type="warning" size="small" disabled @click="handleClick">!</mf-button>
  </div>
</template>
