<template>
  <mf-alert type="success" closable> Success </mf-alert>
  <mf-alert type="warning" closable>
    <template #description>(｡･∀･)ﾉﾞ嗨害咳</template>
    Success
  </mf-alert>
</template>
<style>
.mf-alert:not(:last-child) {
  margin-bottom: 12px;
}
</style>
