<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
import IconDemo from './IconDemo.vue'
import ContainerDemo from './ContainerDemo.vue'
import DescriptionDemo from './DescriptionDemo.vue'

const name = 'Spin'
</script>

<template>
  <div class="doc-body">
    <h1>Spin 加载</h1>
    <p>用于页面和区块的加载中状态</p>
    <hr />

    <h2>演示</h2>

    <h3>填充内容</h3>
    <p>有<span>small</span>、<span>medium</span>、<span>large</span>的Spin</p>
    <show-box :path="`${name}/BaseDemo`">
      <BaseDemo />
    </show-box>

    <h3>填充内容</h3>
    <p>将内容包裹在Spin中</p>
    <show-box :path="`${name}/ContainerDemo`">
      <ContainerDemo />
    </show-box>

    <h3>文字信息</h3>
    <p>图标下面添加文字信息</p>
    <show-box :path="`${name}/DescriptionDemo`">
      <DescriptionDemo />
    </show-box>

    <h3>自定义图标</h3>
    <show-box :path="`${name}/IconDemo`">
      <IconDemo />
    </show-box>

    <hr />
    <h2>API</h2>

    <h3>{{ name }} Props</h3>
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

    <h3>{{ name }} Slots</h3>
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
