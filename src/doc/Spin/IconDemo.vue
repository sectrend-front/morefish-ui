<template>
  <mf-space>
    <mf-spin>
      <template #icon>
        <mf-icon :icon="Star" color="rgb(53,154,222)" :size="36" />
      </template>
    </mf-spin>
  </mf-space>
</template>

<script setup lang="ts">
import { Star } from '#/icon'
</script>
