<script setup lang="ts">
const props = defineProps({
  rotate: Number,
  spin: Boolean
})

const setClass = () => {
  console.log(props)
}
</script>
<template>
  <i class="mf-icon" :class="setClass()">
    <slot />
  </i>
</template>

<style lang="less" scoped>
.mf-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  fill: currentColor;
  color: inherit;
}
</style>
