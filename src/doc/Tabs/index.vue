<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
</script>

<template>
  <div class="doc-body">
    <h1>Tabs 选项卡</h1>
    <p>在指定区域展示不同内容</p>
    <hr />

    <h2>演示</h2>

    <h3>基础使用</h3>
    <p>基本的用法</p>
    <show-box path="Tabs/BaseDemo">
      <BaseDemo />
    </show-box>

    <hr />
    <h2>API</h2>

    <h3>Icon Props</h3>
    <table class="doc-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tr>
        <td>style</td>
        <td><span> CSSProperties </span></td>
        <td><span> - </span></td>
        <th>设置图标的样式</th>
      </tr>
    </table>

    <h3>Icon Slots</h3>
  </div>
</template>

<style lang="less" scoped></style>
