<template>
  <mf-space>
    <mf-tag size="small">
      <template #icon>
        <mf-icon :icon="Star" />
      </template>
      Deafult
    </mf-tag>
    <mf-tag type="primary">
      <template #icon>
        <mf-icon :icon="Compass" />
      </template>
      Primary
    </mf-tag>
    <mf-tag type="success" size="large" closable>
      <template #icon>
        <mf-icon :icon="Setting" />
      </template>
      Success
    </mf-tag>
    <mf-tag type="info" size="small" closable round>
      <template #icon>
        <mf-icon :icon="Star" />
      </template>
      Info
    </mf-tag>
    <mf-tag type="warning" round closable>
      <template #icon>
        <mf-icon :icon="Compass" />
      </template>
      Warning
    </mf-tag>
    <mf-tag type="danger" size="large" round>
      <template #icon>
        <mf-icon :icon="Setting" />
      </template>
      Danger
    </mf-tag>
  </mf-space>
</template>

<script setup lang="ts">
import { Compass, Star, Setting } from '#/icon'
</script>
