<script setup lang="ts">
import { ref } from 'vue'
import { readSouceCode } from '@/utils/readSouceCode'
import { ShowCode, ShowCodeClose } from '#/icon'

// eslint-disable-next-line no-constant-condition

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
    <transition name="fade">
      <highlightjs autodetect :code="codeStr" v-show="codeShow" />
    </transition>

    <div class="code-box">
      <mf-icon
        v-if="!codeShow"
        class="show-code-btn"
        :icon="ShowCode"
        @click="codeShow = !codeShow"
        :title="codeShow ? '隐藏代码' : '显示代码'"
      />
      <mf-icon
        v-else
        class="show-code-btn"
        :icon="ShowCodeClose"
        @click="codeShow = !codeShow"
        :title="codeShow ? '隐藏代码' : '显示代码'"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.show-box {
  width: 100%;

  border: 1px solid var(--mfBorderColor);
  .show-components {
    padding: 20px;
  }
  .code-box {
    display: flex;
    border-top: 1px solid var(--mfBorderColor);
    justify-content: center;
    align-items: center;
    padding: 12px 0;
  }
  .show-code-btn {
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  // .show-components {
  //   display: flex;
  //   align-items: center;
  // }
  margin-bottom: 30px;
  .fade-enter-active {
    transition: all 0.1s ease-out;
  }
  .fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .fade-enter-from,
  .fade-leave-to {
    transform: translateY(-10px);
    opacity: 0.5;
  }
}
</style>
