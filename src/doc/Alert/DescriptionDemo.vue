<template>
  <mf-alert type="success" closable>
    <template #description>(｡･∀･)ﾉﾞ嗨害咳 <span>🍟</span></template>
    Success
  </mf-alert>
  <mf-alert type="info" closable>
    <template #description>(｡･∀･)ﾉﾞ嗨害咳</template>
    info
  </mf-alert>
  <mf-alert type="warning" closable>
    <template #description>(｡･∀･)ﾉﾞ嗨害咳</template>
    warning
  </mf-alert>
  <mf-alert type="error" closable>
    <template #description>(｡･∀･)ﾉﾞ嗨害咳</template>
    error
  </mf-alert>
</template>
<style>
.mf-alert:not(:last-child) {
  margin-bottom: 12px;
}
</style>
