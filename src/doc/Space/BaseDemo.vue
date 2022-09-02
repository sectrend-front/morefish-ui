<template>
  <mf-space>
    <mf-button>Manta Style</mf-button>
    <mf-button>Stygian Desolator</mf-button>
    <mf-button>Linken's Sphere</mf-button>
    <mf-button v-for="(item, index) of list" :key="index">{{ item }}</mf-button>
  </mf-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const list = ref<string[]>(['Black King Bar', 'Eye Of Skadi', 'Radiance'])
</script>
