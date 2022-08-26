<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
const name = 'Space'
</script>

<template>
  <div class="doc-body">
    <h1>Space 间距</h1>
    <p>保持一点点距离感</p>
    <hr />

    <h2>演示</h2>

    <h3>基础使用</h3>
    <show-box :path="`${name}/BaseDemo`">
      <BaseDemo />
    </show-box>

    <h3>垂直</h3>
    <show-box :path="`${name}/BaseDemo`"> </show-box>

    <h3>尾部</h3>
    <show-box :path="`${name}/BaseDemo`"> </show-box>

    <h3>间隙</h3>
    <show-box :path="`${name}/BaseDemo`"> </show-box>

    <h3>空间围绕</h3>
    <show-box :path="`${name}/BaseDemo`"> </show-box>

    <h3>从中间</h3>
    <show-box :path="`${name}/BaseDemo`"> </show-box>

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
