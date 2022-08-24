<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
import CoverDemo from './CoverDemo.vue'
import SlotDemo from './SlotDemo.vue'
import SplitDemo from './SplitDemo.vue'
import BorderedDemo from './BorderedDemo.vue'
import HoverDemo from './HoverDemo.vue'
import EmbedDemo from './EmbedDemo.vue'
</script>

<template>
  <div class="doc-body">
    <h1>Card 卡片</h1>
    <p>去码头整点 🍟 放进去</p>
    <hr />

    <h2>演示</h2>

    <h3>基础使用</h3>
    <p>基本的用法</p>
    <show-box path="Card/BaseDemo">
      <BaseDemo />
    </show-box>

    <h3>封面</h3>
    <p>卡片支持封面效果</p>
    <show-box path="Card/CoverDemo">
      <CoverDemo />
    </show-box>

    <h3>插槽</h3>
    <p>卡片封装了很多插槽</p>
    <show-box path="Card/SlotDemo">
      <SlotDemo />
    </show-box>

    <h3>分段</h3>
    <p>内容区域内会出现分割线</p>
    <show-box path="Card/SplitDemo">
      <SplitDemo />
    </show-box>

    <h3>无边框</h3>
    <p>可以对边框使用大消失之术</p>
    <show-box path="Card/BorderedDemo">
      <BorderedDemo />
    </show-box>

    <h3>可悬浮</h3>
    <p>鼠标移上去看看</p>
    <show-box path="Card/HoverDemo">
      <HoverDemo />
    </show-box>

    <h3>嵌入效果</h3>
    <p>与父级容器划清界限</p>
    <show-box path="Card/EmbedDemo">
      <EmbedDemo />
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
