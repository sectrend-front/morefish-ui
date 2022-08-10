<script setup lang="ts">
import { menu, system, version } from './const '
import { searchIndexMap, MapValue } from '@/const/IndexMap'
import { onMounted, ref } from 'vue'
import router from '@/router'

const menuCurrent = ref<number>()
const systemCurrent = ref<number>()
const searchListCurrent = ref<number>(0)
const searchVal = ref<string>('')
const searchList = ref<MapValue[]>([])
const searchFlag = ref<boolean>(false)
const theme = ref<string>('深色')
const menuClick = (index: number) => {
  menuCurrent.value = index
}
const systemClick = (item: string, index: number) => {
  if (item === '深色') {
    theme.value = '浅色'
    document.getElementsByTagName('html')[0].className = 'dark'
  } else {
    theme.value = '深色'
    document.getElementsByTagName('html')[0].className = ''
  }
  systemCurrent.value = index
}
const searchChange = () => {
  if (searchVal.value) {
    searchList.value = searchIndexMap(searchVal.value)
  } else {
    searchList.value = []
  }
}
const listEnter = (index: number) => {
  searchListCurrent.value = index
}
const listActive = (item: MapValue) => {
  router.push(item.url)
  searchVal.value = ''
  searchList.value = []
}
const searchBlur = (e: any) => {
  if (e.target.localName !== 'li' && e.target.localName !== 'input') {
    searchFlag.value = false
  } else {
    searchFlag.value = true
  }
}
onMounted(() => {
  window.addEventListener('click', searchBlur)
})
</script>
<template>
  <div class="box">
    <div>icon</div>
    <div class="menuBox">
      <div v-for="(item, index) in menu" :key="index" class="menu" @click="menuClick(index)">
        <span :class="{ menuActive: menuCurrent === index }">{{ item }}</span>
      </div>
      <div class="searchBox">
        <input type="text" placeholder="搜索" @input="searchChange" v-model="searchVal" />
        <ul class="list" :class="{ searchBlur: !searchFlag }" v-if="searchList.length !== 0">
          <li
            v-for="(item, index) in searchList"
            :key="index"
            :class="{ searchListActive: searchListCurrent === index }"
            @mouseenter="listEnter(index)"
            @click="listActive(item)"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
    <div class="systemBox">
      <div v-for="(item, index) in system" :key="index" class="system" :class="{ systemActive: systemCurrent === index }">
        <span v-if="item === '深色'" @click="systemClick(theme, index)">{{ theme }}</span>
        <span v-else @click="systemClick(item, index)">{{ item }}</span>
      </div>
      <span class="version">{{ version }}</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import './index.less';
</style>
