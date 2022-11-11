<template>
  <span>
    <mf-icon :icon="Star" />
    <mf-divider vertical />
    你好
    <mf-divider vertical />
    <a href="#">Link</a>
    <mf-divider vertical />
    <mf-tag type="primary" size="small">Vertical</mf-tag>
  </span>
</template>

<script setup lang="ts">
import { Star } from '#/icon'
</script>
