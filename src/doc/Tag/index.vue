<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
import GhostDemo from './GhostDemo.vue'
import CloaseDemo from './CloaseDemo.vue'
import SizeDemo from './SizeDemo.vue'
import ShapeDemo from './ShapeDemo.vue'
import IconDemo from './IconDemo.vue'
const name = 'Tag'
</script>

<template>
  <div class="doc-body">
    <h1>Tag 标签</h1>
    <p>保持一点点距离感</p>
    <hr />

    <h2>演示</h2>

    <h3>基础使用</h3>
    <show-box :path="`${name}/BaseDemo`">
      <BaseDemo />
    </show-box>

    <h3>虚化标签</h3>
    <show-box :path="`${name}/GhostDemo`">
      <GhostDemo />
    </show-box>

    <h3>可关闭</h3>
    <p>通过 <span>v-if</span> 或 <span>v-show</span> 控制关闭显示</p>
    <show-box :path="`${name}/CloaseDemo`">
      <CloaseDemo />
    </show-box>

    <h3>尺寸</h3>
    <show-box :path="`${name}/SizeDemo`">
      <SizeDemo />
    </show-box>

    <h3>形状</h3>
    <p>泥煤药丸！</p>
    <show-box :path="`${name}/ShapeDemo`">
      <ShapeDemo />
    </show-box>

    <h3>图标</h3>
    <p>鲜花需要绿叶点缀</p>
    <show-box :path="`${name}/IconDemo`">
      <IconDemo />
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
        <th>水平排列方式</th>
      </tr>
      <tr>
        <td>align</td>
        <td><span> CSSProperties </span></td>
        <td><span> - </span></td>
        <th>垂直排列方式</th>
      </tr>
      <tr>
        <td>size</td>
        <td><span> CSSProperties </span></td>
        <td><span> - </span></td>
        <th>为数字时，是水平和垂直间距；为数组时，是 [水平间距, 垂直间距]</th>
      </tr>
      <tr>
        <td>vertical</td>
        <td><span> CSSProperties </span></td>
        <td><span> - </span></td>
        <th>是否垂直布局</th>
      </tr>
      <tr>
        <td>wrap</td>
        <td><span> CSSProperties </span></td>
        <td><span> true </span></td>
        <th>是否超出换行</th>
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
