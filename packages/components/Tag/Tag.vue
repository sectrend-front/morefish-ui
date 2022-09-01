<script setup lang="ts">
import { Name } from './const'
import './style/index.less'
import { getProps } from './src/getProps'
import { setClass } from './src/setClass'
import { useSlots } from 'vue'
const props = defineProps(getProps())

console.log(props)

const emit = defineEmits(['close'])
const slots = useSlots()
</script>

<template>
  <div :class="setClass(props)">
    <span :class="`${Name}__content`">
      <div :class="`${Name}-icon__content`" v-if="slots['icon']">
        <slot name="icon" />
      </div>
      <slot />
    </span>
    <div :class="`${Name}-close__content`" v-if="props.closable" @click="(evt) => emit('close', evt)">
      <span>×</span>
    </div>
  </div>
</template>
