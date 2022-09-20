<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
import CloseDemo from './CloseDemo.vue'
import TypeDemo from './TypeDemo.vue'
import DescriptionDemo from './DescriptionDemo.vue'
import IconDemo from './IconDemo.vue'
</script>

<template>
  <div class="doc-body">
    <h1>警告提示 Alert</h1>
    <p>提醒你这里要好好看！</p>
    <br />

    <h2>演示</h2>

    <h3>基础按钮</h3>
    <p>最基本的用法</p>
    <show-box path="Alert/BaseDemo">
      <BaseDemo />
    </show-box>

    <br />

    <h3>四种样式</h3>
    <p>共有四种样式 <span>success</span> 、<span>info</span> 、<span>warning</span> 、 <span>error</span> 。</p>
    <show-box path="Alert/TypeDemo">
      <TypeDemo />
    </show-box>

    <br />

    <h3>可以关闭</h3>
    <p>显示关闭按钮，点击可以关闭告警提示</p>
    <show-box path="Alert/CloseDemo">
      <CloseDemo />
    </show-box>

    <br />

    <h3>含有辅助性文字</h3>
    <p>含有辅助性文字介绍的警告提示。</p>
    <show-box path="Alert/DescriptionDemo">
      <DescriptionDemo />
    </show-box>

    <br />

    <h3>显示图标</h3>
    <p>可以设置图标让心情更加愉悦噢~</p>
    <show-box path="Alert/IconDemo">
      <IconDemo />
    </show-box>

    <h2>API</h2>

    <h3>Alert Props</h3>
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
        <td><span> 'success' | 'info' | 'warning' | 'error' </span></td>
        <td><span> 'info' </span></td>
        <td>按钮的类型</td>
      </tr>
      <tr>
        <td>closable</td>
        <td><span> Boolean </span></td>
        <td><span> 'false' </span></td>
        <td>显示关闭按钮</td>
      </tr>
      <tr>
        <td>showIcon</td>
        <td><span> Boolean </span></td>
        <td><span> 'false' </span></td>
        <td>是否显示图标</td>
      </tr>
      <tr>
        <td>icon</td>
        <td><span> 'vnode' | 'slot' </span></td>
        <td><span> - </span></td>
        <td>自定义图标，showIcon 为 true 时有效</td>
      </tr>
    </table>
  </div>
</template>

<style lang="less" scoped></style>
