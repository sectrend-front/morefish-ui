<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
import VerticalDemo from './VerticalDemo.vue'
import EndDemo from './EndDemo.vue'
import BetweenDemo from './BetweenDemo.vue'
import AroundDemo from './AroundDemo.vue'
import CenterDemo from './CenterDemo.vue'
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
    <show-box :path="`${name}/VerticalDemo`">
      <VerticalDemo />
    </show-box>

    <h3>尾部</h3>
    <show-box :path="`${name}/EndDemo`">
      <EndDemo />
    </show-box>

    <h3>间隙</h3>
    <show-box :path="`${name}/BetweenDemo`">
      <BetweenDemo />
    </show-box>

    <h3>空间围绕</h3>
    <show-box :path="`${name}/AroundDemo`">
      <AroundDemo />
    </show-box>

    <h3>中间</h3>
    <show-box :path="`${name}/CenterDemo`">
      <CenterDemo />
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
        <td>justify</td>
        <td><span> </span></td>
        <td><span> - </span></td>
        <td>水平排列方式</td>
      </tr>
      <tr>
        <td>align</td>
        <td><span> CSSProperties </span></td>
        <td><span> - </span></td>
        <td>垂直排列方式</td>
      </tr>
      <tr>
        <td>size</td>
        <td><span> CSSProperties </span></td>
        <td><span> - </span></td>
        <td>为数字时，是水平和垂直间距；为数组时，是 [水平间距, 垂直间距]</td>
      </tr>
      <tr>
        <td>vertical</td>
        <td><span> CSSProperties </span></td>
        <td><span> - </span></td>
        <td>是否垂直布局</td>
      </tr>
      <tr>
        <td>wrap</td>
        <td><span> CSSProperties </span></td>
        <td><span> true </span></td>
        <td>是否超出换行</td>
      </tr>
    </table>

    <h3>Space Slots</h3>
    <table class="doc-table">
      <thead>
        <tr>
          <th>名称</th>
          <th>参数</th>
          <th>说明</th>
        </tr>
      </thead>
      <tr>
        <td>default</td>
        <td><span> () </span></td>
        <th>内容</th>
      </tr>
    </table>
  </div>
</template>

<style lang="less" scoped></style>
