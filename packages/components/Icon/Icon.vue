<script setup lang="ts">
import { type PropType, type VNode } from 'vue'

const props = defineProps({
  rotate: Number,
  spin: Boolean,
  size: Number,
  color: String,
  icon: Object as PropType<VNode>
})

const setClass = () => {
  console.log(props.icon)
}
</script>
<template>
  <i class="mf-icon" :class="setClass()">
    <template v-if="props.icon">
      <component :is="props.icon" />
    </template>
    <template v-else>
      <slot />
    </template>
  </i>
</template>

<style lang="less" scoped>
@import url(#/style/common.less);
.mf-icon {
  .iconInit();
}
</style>
