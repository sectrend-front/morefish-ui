<script setup lang="ts">
import { Edit, Star, Setting, Refresh } from '../../icon'
</script>

<template>
  <mf-button type="primary">
    <template #icon>
      <mf-icon>
        <Edit />
      </mf-icon>
    </template>
    Edit
  </mf-button>
  <mf-button type="success">
    <template #iconAfter>
      <mf-icon>
        <Star />
      </mf-icon>
    </template>
    Star
  </mf-button>
  <mf-button type="warning" circle>
    <template #icon>
      <mf-icon>
        <Setting />
      </mf-icon>
    </template>
  </mf-button>
  <mf-button type="danger" round>
    <template #icon>
      <mf-icon>
        <Refresh />
      </mf-icon>
    </template>
  </mf-button>
</template>
