<script setup lang="ts">
import './style/index.less'
import { getProps } from './src/getProps'
import { getDefaultRadius } from './src/getDefaultRadius'
import { computed, useSlots } from 'vue'

const props = defineProps(getProps())
const slots = useSlots()

console.log(props.rotate)
const radius = computed(() => getDefaultRadius(props.size))

// show的过度动画！！！
</script>

<template>
  <div class="mf-spin">
    <div class="mf-spin-content">
      <slot />
    </div>
    <Transition name="spin">
      <div
        class="mf-spin-body"
        :class="slots.default && 'mf-spin-body__loading'"
        v-show="!slots.default || (slots.default && props.show)"
      >
        <svg
          v-if="!slots['icon']"
          :width="radius * 4 + 5"
          :height="radius * 4 + 5"
          :class="props.rotate && 'mf-spin-icon__rotate'"
        >
          <circle :cx="radius" :cy="radius" :r="radius" fill="rgba(53,154,222,1)" />
          <circle :cx="radius" :cy="4 * radius" :r="radius" fill="rgba(53,154,222,0.4)" />
          <circle :cx="radius * 4" :cy="radius" :r="radius" fill="rgba(53,154,222,0.8)" />
          <circle :cx="radius * 4" :cy="radius * 4" :r="radius" fill="rgba(53,154,222,0.6)" />
        </svg>
        <div class="mf-spin-icon" v-if="slots['icon']" :class="props.rotate && 'mf-spin-icon__rotate'">
          <slot name="icon" />
        </div>

        <div class="mf-spin-description" v-if="slots['description']">
          <slot name="description" />
        </div>
      </div>
    </Transition>
  </div>
</template>
