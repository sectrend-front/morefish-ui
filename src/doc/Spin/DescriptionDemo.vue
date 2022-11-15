<template>
  <mf-space vertical>
    <mf-spin :show="show">
      <mf-card title="Card"> Content...Content...Content...Content... </mf-card>
      <template #description>
        <span :style="{ color: 'rgb(53,154,222)' }">Loading...</span>
      </template>
    </mf-spin>
    <mf-button @click="show = !show" type="primary" ghost>click me</mf-button>
  </mf-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>
