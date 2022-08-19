<template>
  <mf-card title="Card">
    <template #cover>
      <img src="@/assets/jay.jpeg" />
    </template>
    <template #header-extra>
      <mf-button type="danger" circle size="small">A</mf-button>
      <mf-button type="warning" circle size="small">B</mf-button>
    </template>
    我是内容
  </mf-card>
</template>

<style scoped>
.mf-card {
  width: 300px;
}
</style>
