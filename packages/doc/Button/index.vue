<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
import GhostDemo from './GhostDemo.vue'
import DashedDemo from './DashedDemo.vue'
import ShapeDemo from './ShapeDemo.vue'
import SizeDemo from './SizeDemo.vue'
import IconDemo from './IconDemo.vue'
import DisabledDemo from './DisabledDemo.vue'
import LoadingDemo from './LoadingDemo.vue'
</script>

<template>
  <div class="doc-body">
    <h1>Button 按钮</h1>
    <p>触发相关操作</p>
    <hr />

    <h2>演示</h2>

    <h3>基础按钮</h3>
    <p>
      按钮的

      <span>type</span>
      分别为 <span>default</span>、 <span>primary</span>、<span>success</span>、 <span>info</span>、
      <span>warning</span>
      和 <span>danger</span>
    </p>
    <show-box path="Button/BaseDemo">
      <BaseDemo />
    </show-box>

    <h3>透明按钮</h3>
    <p>使用 <span>ghost</span> 来使用背景透明的按钮</p>
    <show-box path="Button/GhostDemo">
      <GhostDemo />
    </show-box>

    <h3>虚线按钮</h3>
    <p>使用 <span>dashed</span> 来使用虚线按钮</p>
    <show-box path="Button/DashedDemo">
      <DashedDemo />
    </show-box>

    <h3>形状</h3>
    <p>按钮拥有圆形 <span>circle</span>、圆角 <span>round</span>、方形三种形状</p>
    <p>其中圆形适合放置：</p>
    <ul>
      <li>图标</li>
      <li>一至二个字母、字符</li>
      <li>一个汉字</li>
    </ul>
    <show-box path="Button/ShapeDemo">
      <ShapeDemo />
    </show-box>

    <h3>尺寸</h3>
    <p>按钮有默认、<span>small</span>、和 <span>large</span> 三种尺寸</p>
    <show-box path="Button/SizeDemo">
      <SizeDemo />
    </show-box>

    <h3>图标</h3>
    <p>在按钮上使用图标</p>
    <show-box path="Button/IconDemo">
      <IconDemo />
    </show-box>

    <h3>禁用</h3>
    <p>按钮可以被禁用</p>
    <show-box path="Button/DisabledDemo">
      <DisabledDemo />
    </show-box>

    <h3>加载中</h3>
    <p>按钮有加载状态</p>
    <show-box path="Button/LoadingDemo">
      <LoadingDemo />
    </show-box>

    <hr />
    <h2>API</h2>
    <h3>Button Props</h3>
    <h3>Button Slots</h3>
  </div>
</template>

<style lang="less" scoped></style>
