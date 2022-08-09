<script setup lang="ts">
// import { MfButton } from 'morefish-ui'
</script>

<template>
  <div>
    <section></section>
    <highlightjs autodetect code="const x = 5;" />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
section {
  display: flex;
}
</style>
