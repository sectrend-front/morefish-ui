<script setup lang="ts">
import { MfButton } from '@/packages'
</script>

<template>
  <div>
    <mf-button ghost>Deafult</mf-button>
    <mf-button type="primary" ghost>Primary</mf-button>
    <mf-button type="success" ghost strong>Success</mf-button>
    <mf-button type="info" ghost>Info</mf-button>
    <mf-button type="warning" ghost>Warning</mf-button>
    <mf-button type="danger" ghost strong dashed>Danger</mf-button>
  </div>
</template>
