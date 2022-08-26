<template>
  <mf-tabs v-model:activeKey="tabKey">
    <mf-tab-pane name="one" tab="React">11</mf-tab-pane>
    <mf-tab-pane name="two" tab="Angular">22</mf-tab-pane>
    <mf-tab-pane name="three" tab="Svelte">33</mf-tab-pane>
    <template v-for="{ name, tab } of list" :key="name">
      <mf-tab-pane :name="name" :tab="tab">11</mf-tab-pane>
    </template>
  </mf-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const tabKey = ref('one')
const list = ref([
  {
    name: 'one',
    tab: 'react'
  },
  {
    name: 'two',
    tab: 'Angular'
  },
  {
    name: 'three',
    tab: 'Svelte'
  }
])
setTimeout(() => {
  tabKey.value = 'three'
}, 2000)
</script>
