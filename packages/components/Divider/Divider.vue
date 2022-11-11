<script setup lang="ts">
import { getProps, PlaceLeft, PlaceRight } from './src/getProps'
import './style/index.less'

const props = defineProps(getProps())
</script>

<template>
  <div class="mf-divider" :class="props.vertical && 'mf-divider--vertical'">
    <template v-if="props.titleText && !props.vertical">
      <div class="mf-divider__line" :class="props.titlePlace === PlaceLeft && 'mf-divider__line--left'" />
      <span class="mf-divider__text">{{ props.titleText }}</span>
      <div class="mf-divider__line" :class="props.titlePlace === PlaceRight && 'mf-divider__line--right'" />
    </template>
    <template v-else-if="!props.titleText && !props.vertical">
      <div class="mf-divider__line" :class="props.vertical && 'mf-divider__line--vertical'" />
    </template>
  </div>
</template>
