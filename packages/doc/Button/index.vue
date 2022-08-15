<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
import GhostDemo from './GhostDemo.vue'
import DashedDemo from './DashedDemo.vue'
import ShapeDemo from './ShapeDemo.vue'
import SizeDemo from './SizeDemo.vue'
import DisabledDemo from './DisabledDemo.vue'

const code = `<div>
  <mf-button>deafult</mf-button>
  <mf-button type="primary">Primary 重要</mf-button>
  <mf-button type="success">Success</mf-button>
  <mf-button type="info">Info</mf-button>
  <mf-button type="warning">Warning</mf-button>
  <mf-button type="danger">Danger</mf-button>
</div>`
</script>

<template>
  <div class="doc-body">
    <h1>Button 按钮</h1>
    <p>触发相关操作</p>
    <br />

    <h2>演示</h2>

    <h3>基础按钮</h3>
    <p>按钮的 type 分别为 default、primary、success、info、warning 和 danger</p>
    <show-box :code="code">
      <BaseDemo />
    </show-box>

    <h3>透明按钮</h3>
    <p>使用 ghost 来使用背景透明的按钮</p>
    <show-box :code="code">
      <GhostDemo />
    </show-box>

    <h3>虚线按钮</h3>
    <p>使用 dashed 来使用虚线按钮</p>
    <show-box :code="code">
      <DashedDemo />
    </show-box>

    <h3>形状</h3>
    <p>按钮拥有圆形、圆角、方形三种形状</p>
    <p>其中圆形适合放置：</p>
    <ul>
      <li>图标</li>
      <li>一至二个字母、字符</li>
      <li>一个汉字</li>
    </ul>
    <show-box :code="code">
      <ShapeDemo />
    </show-box>

    <h3>尺寸</h3>
    <p>按钮有默认、small、和large三种尺寸</p>
    <show-box :code="code">
      <SizeDemo />
    </show-box>

    <h3>图标</h3>
    <p>在按钮上使用图标</p>
    <show-box :code="code"> </show-box>

    <h3>禁用</h3>
    <p>按钮可以被禁用</p>
    <show-box :code="code">
      <DisabledDemo />
    </show-box>

    <h3>加载中</h3>
    <p>按钮有加载状态</p>
    <show-box :code="code"> </show-box>

    <hr />
    <h2>API</h2>
    <h3>Button Props</h3>
    <h3>Button Slots</h3>
  </div>
</template>

<style lang="less" scoped></style>
