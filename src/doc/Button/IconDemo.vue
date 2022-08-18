<template>
  <mf-button type="primary">
    <template #icon>
      <mf-icon :icon="Edit" />
    </template>
    Edit
  </mf-button>
  <mf-button type="success">
    <template #iconAfter>
      <mf-icon :icon="Star" />
    </template>
    Star
  </mf-button>
  <mf-button type="warning" circle>
    <template #icon>
      <mf-icon :icon="Setting" />
    </template>
  </mf-button>
</template>

<script setup lang="ts">
import { Edit, Star, Setting } from '#/icon'
</script>
