<template>
  <mf-alert type="success" closable showIcon>天下如棋，一步三算!</mf-alert>
  <mf-alert type="info" closable showIcon>运筹帷幄之中，决胜千里之外!</mf-alert>
  <mf-alert type="warning" closable showIcon>
    <template #icon>
      <mf-icon :icon="Star" />
    </template>
    东风破!
  </mf-alert>
  <mf-alert type="error" closable showIcon>
    <template #icon>
      <mf-icon :icon="Star" />
    </template>
    啊～起风了。
  </mf-alert>
  <mf-alert type="success" closable showIcon>
    <template #description>(｡･∀･)ﾉﾞ嗨害咳 <span>🍟</span></template>
    Success
  </mf-alert>
  <mf-alert type="info" closable showIcon>
    <template #description>(｡･∀･)ﾉﾞ嗨害咳</template>
    info
  </mf-alert>
  <mf-alert type="warning" closable showIcon>
    <template #icon>
      <mf-icon :icon="Star" />
    </template>
    <template #description>(｡･∀･)ﾉﾞ嗨害咳</template>
    warning
  </mf-alert>
  <mf-alert type="error" closable showIcon>
    <template #icon>
      <mf-icon :icon="Star" />
    </template>
    <template #description>(｡･∀･)ﾉﾞ嗨害咳</template>
    error
  </mf-alert>
</template>
<script setup lang="ts">
import { Star } from '#/icon'
</script>
<style>
.mf-alert:not(:last-child) {
  margin-bottom: 12px;
}
</style>
