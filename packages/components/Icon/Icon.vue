<script setup lang="ts">
import { type PropType, type VNode } from 'vue'
import { IHTMLAttr } from './const'

const props = defineProps({
  rotate: Number,
  spin: Boolean,
  size: Number,
  color: String,
  icon: Object as PropType<VNode>
})

const setStyle = () => {
  const styleObj: IHTMLAttr = {}
  if (props.size && Number(props.size)) styleObj.fontSize = `${Number(props.size)}px`
  if (props.color) styleObj.color = props.color
  if (props.rotate && Number(props.rotate)) styleObj.transform = `rotate(${props.rotate}deg)`
  if (props.spin) styleObj.animation = 'icon-rotate-360 1s linear infinite'
  return styleObj
}
</script>

<template>
  <i class="mf-icon" :style="setStyle()">
    <template v-if="props.icon">
      <component :is="props.icon" />
    </template>
    <template v-else>
      <slot />
    </template>
  </i>
</template>

<style lang="less" scoped>
@import url(../../style/common.less);
.mf-icon {
  .iconInit();
}
</style>
