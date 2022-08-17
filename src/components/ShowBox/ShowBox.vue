<script setup lang="ts">
import { ref } from 'vue'
import { readSouceCode } from './readSouceCode'

const props = defineProps({
  path: String
})
const codeShow = ref(false)
const codeStr = ref('')

if (props.path) {
  readSouceCode(props.path).then((res) => {
    codeStr.value = res
  })
}
</script>

<template>
  <div class="show-box">
    <div class="show-components">
      <slot />
    </div>
    <highlightjs autodetect :code="codeStr" v-show="codeShow" />
    <div class="show-code-btn" @click="codeShow = !codeShow">{{ codeShow ? '隐藏代码' : '展示代码' }}</div>
  </div>
</template>

<style lang="less" scoped>
.show-box {
  width: 100%;
  padding: 5px;
  border: 1px solid black;
  .show-code-btn {
    text-align: center;
    cursor: pointer;
  }
  .show-components {
    display: flex;
    align-items: center;
  }
  margin-bottom: 30px;
}
</style>
