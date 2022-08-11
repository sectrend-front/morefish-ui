<script setup lang="ts">
import { MfButton } from '@/packages'
</script>

<template>
  <div>
    <mf-button dashed strong>Deafult</mf-button>
    <mf-button type="primary" dashed>Primary</mf-button>
    <mf-button type="success" dashed strong>Success</mf-button>
    <mf-button type="info" dashed>Info</mf-button>
    <mf-button type="warning" dashed>Warning</mf-button>
    <mf-button type="danger" dashed>Danger</mf-button>
  </div>
</template>
