<script setup lang="ts">
import { getProps } from './src/getProps'

const props = defineProps(getProps())
console.log(props.titlePlace, 233)
console.log(props.dashed)
</script>

<template>
  <div>|</div>
</template>
