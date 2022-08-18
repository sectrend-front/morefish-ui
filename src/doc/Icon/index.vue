<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
</script>

<template>
  <div class="doc-body">
    <h1>Icon 图标</h1>
    <p>采用SVG作为字体图标</p>
    <hr />

    <h2>演示</h2>

    <h3>基础使用</h3>
    <show-box path="Icon/BaseDemo">
      <BaseDemo />
    </show-box>

    <hr />
    <h2>API</h2>

    <h3>Button Props</h3>
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
        <td>type</td>
        <td><span> 'default' | 'tertiary' | 'primary' | 'success' | 'info' | 'warning' | 'error' </span></td>
        <td><span> 'default' </span></td>
        <th>按钮的类型</th>
      </tr>
      <tr>
        <td>type</td>
        <td><span> 'default' | 'tertiary' | 'primary' | 'success' | 'info' | 'warning' | 'error' </span></td>
        <td><span> 'default' </span></td>
        <th>按钮的类型</th>
      </tr>
      <tr>
        <td>type</td>
        <td><span> 'default' | 'tertiary' | 'primary' | 'success' | 'info' | 'warning' | 'error' </span></td>
        <td><span> 'default' </span></td>
        <th>按钮的类型</th>
      </tr>
      <tr>
        <td>type</td>
        <td><span> 'default' | 'tertiary' | 'primary' | 'success' | 'info' | 'warning' | 'error' </span></td>
        <td><span> 'default' </span></td>
        <th>按钮的类型</th>
      </tr>
    </table>

    <h3>Button Slots</h3>
  </div>
</template>

<style lang="less" scoped></style>
