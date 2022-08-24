<template>
  <mf-tabs v-model:activeKey="tabKey">
    <mf-tab-pane key="one" tab="React">11</mf-tab-pane>
    <mf-tab-pane key="two" tab="Angular">22</mf-tab-pane>
    <mf-tab-pane key="three" tab="Svelte">33</mf-tab-pane>
    <div>233</div>
  </mf-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const tabKey = ref('one')

setTimeout(() => {
  tabKey.value = 'three'
}, 2000)
</script>
