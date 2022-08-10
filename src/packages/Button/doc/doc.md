<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
  const code = 
`<template>
  <div>
    <section>
      <mf-button type="primary" round size="large">Primary 重要</mf-button>
      <mf-button type="success" size="large">Success</mf-button>
      <mf-button type="info" size="small">Info</mf-button>
      <mf-button type="warning">Warning</mf-button>
      <mf-button type="danger">危险</mf-button>
    </section>
    <highlightjs autodetect code="const x = 5;" />
    <router-view></router-view>
  </div>
</template>`

</script>

# Button 按钮

触发相关操作

---

## 演示

### 基础按钮

按钮的 type 分别为 default、primary、info、success、warning 和 error
<show-box :code="code">
<BaseDemo/>
</show-box>

### 次要按钮

### 虚线按钮

### 形状

### 尺寸

### 图标

### 禁用

### 加载中

---

## API

### Button Props

| **111** | **222** | **333** |
| ------- | ------- | ------- |
| 啊啊    | 222     | 33      |
| 214     | 213     | 44      |

### Button Slots
