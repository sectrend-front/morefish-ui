<template>
  <mf-space vertical>
    <mf-spin :show="show">
      <mf-card title="Card"> Content...Content...Content...Content... </mf-card>
    </mf-spin>
    <mf-button @click="show = !show" type="primary" ghost>点击转圈</mf-button>
  </mf-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>
