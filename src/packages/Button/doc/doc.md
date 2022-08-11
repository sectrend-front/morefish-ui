<script setup lang="ts">
import BaseDemo from './BaseDemo.vue'
import GhostDemo from './GhostDemo.vue'
import DashedDemo from './DashedDemo.vue'

const code = 
`<div>
  <mf-button>deafult</mf-button>
  <mf-button type="primary">Primary 重要</mf-button>
  <mf-button type="success">Success</mf-button>
  <mf-button type="info">Info</mf-button>
  <mf-button type="warning">Warning</mf-button>
  <mf-button type="danger">Danger</mf-button>
</div>`

</script>

# Button 按钮

触发相关操作

---

## 演示

### 基础按钮

按钮的 type 分别为 default、primary、success、info、warning 和 danger
<show-box :code="code">
  <BaseDemo/>
</show-box>

### 透明按钮

使用 ghost 来使用背景透明的按钮
<show-box :code="code">
  <GhostDemo/>
</show-box>

### 虚线按钮

使用 dashed 来使用虚线按钮
<show-box :code="code">
  <DashedDemo/>
</show-box>

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
