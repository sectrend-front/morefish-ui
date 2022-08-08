<script setup lang="ts">
import { MfButton } from '@/packages'
// import { MfButton } from 'morefish-ui'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      <span>233</span>
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <section>
      <mf-button type="primary" round size="large">Primary 重要</mf-button>
      <mf-button type="success" size="large">Success</mf-button>
      <mf-button type="info" size="small">Info</mf-button>
      <mf-button type="warning">Warning</mf-button>
      <mf-button type="danger">危险</mf-button>
    </section>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 10px #646cff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 1em #42b883aa);
}

section{
  display: flex;
}
</style>
