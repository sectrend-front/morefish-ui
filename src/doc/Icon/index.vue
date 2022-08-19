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
    <p>给图标添加 <span>size</span> 和 <span>color</span> 属性</p>
    <show-box path="Icon/BaseDemo">
      <BaseDemo />
    </show-box>

    <h3>效果</h3>
    <p>
      将自定义 <span>SVG</span> 保存在一个新的 <span>.vue</span> 文件并导出给图标组件使用。（确保设定了 <span>SVG</span> 的
      <span>viewBox</span> 属性）
    </p>
    <show-box path="Icon/BaseDemo">
      <BaseDemo />
    </show-box>

    <h3>自定义图标</h3>
    <p>
      将自定义 <span>SVG</span> 保存在一个新的 <span>.vue</span> 文件并导出给图标组件使用。（确保设定了 <span>SVG</span> 的
      <span>viewBox</span> 属性）
    </p>
    <show-box path="Icon/BaseDemo">
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
