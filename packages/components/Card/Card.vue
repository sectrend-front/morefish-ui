<script setup lang="ts">
import { useSlots } from 'vue'
import './style/index.less'
import { Name } from './const'

const props = defineProps({
  title: String,
  split: Boolean,
  hoverable: Boolean,
  embedded: Boolean,
  bordered: {
    type: Boolean,
    default: true
  }
})
const slots = useSlots()

const setClass = () => {
  let str = Name
  str += props.split ? ` ${Name}-split` : ''
  str += props.bordered ? ' ' : ` ${Name}-border-none`
  str += props.hoverable ? ` ${Name}-hoverable` : ''
  str += props.embedded ? ` ${Name}-embedded` : ''
  return str
}
</script>

<template>
  <div :class="setClass()">
    <div class="mf-card-cover" v-if="slots['cover']">
      <slot name="cover" />
    </div>
    <div class="mf-card-header" v-if="!slots['header']">
      <div class="mf-card-header__main" v-if="props.title">{{ props.title }}</div>
      <div class="mf-card-header__extra" v-if="slots['header-extra']">
        <slot name="header-extra" />
      </div>
    </div>
    <div class="mf-card-header__custom" v-if="slots['header']">
      <slot name="header" />
    </div>
    <div class="mf-card-contents">
      <slot />
    </div>
    <div class="mf-card-footer" v-if="slots['footer']">
      <slot name="footer" />
    </div>
    <div class="mf-card-action" v-if="slots['action']">
      <slot name="action" />
    </div>
  </div>
</template>
