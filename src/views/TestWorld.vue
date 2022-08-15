<script setup lang="ts">
import { MfButton, MFConfigProvider } from '#'
import zh from '#/locale/lang/zh'
</script>

<template>
  <div>
    <MFConfigProvider :locale="zh" theme="dark" size="large">
      <section>
        <mf-button type="primary" round size="large">Primary 重要</mf-button>
        <mf-button type="success" size="large">Success</mf-button>
        <mf-button type="info" size="small">Info</mf-button>
        <mf-button type="warning">Warning</mf-button>
        <mf-button type="danger">危险</mf-button>
      </section>
    </MFConfigProvider>
    <highlightjs autodetect code="const x = 5;" />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
section {
  display: flex;
}
</style>
