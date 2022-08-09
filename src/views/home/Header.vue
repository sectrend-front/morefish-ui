<script setup lang="ts">
import { menu, system, search } from './const '
import { ref } from 'vue'
import router from '@/router'
type Isearch = {
  component: string
  url: string
}
const menuCurrent = ref<number>()
const systemCurrent = ref<number>()
const searchListCurrent = ref<number>(0)
const searchVal = ref<string>('')
const searchList = ref<Isearch[]>([])
const searchFlag = ref<boolean>(false)
const menuClick = (index) => {
  menuCurrent.value = index
}
const systemClick = (index) => {
  systemCurrent.value = index
}
const searchChange = () => {
  if (searchVal.value) {
    searchList.value = search.filter((el) => {
      return el.component.toLowerCase().split('').includes(searchVal.value.trim().toLowerCase())
    })
  } else {
    searchList.value = []
  }
}
const listEnter = (index) => {
  searchListCurrent.value = index
}
const listActive = (item: Isearch) => {
  router.push(item.url)
  searchVal.value = ''
  searchList.value = []
}
const searchBlur = () => {
  searchFlag.value = false
}
const searchFocus = () => {
  searchFlag.value = true
}
</script>
<template>
  <div class="box">
    <div>icon</div>
    <div class="menuBox">
      <div v-for="(item, index) in menu" :key="index" class="menu" @click="menuClick(index)">
        <span :class="{ menuActive: menuCurrent === index }">{{ item }}</span>
      </div>
      <div class="searchBox">
        <input type="text" placeholder="搜索" @input="searchChange" @focus="searchFocus" @blur="searchBlur" v-model="searchVal" />
        <ul class="list" :class="{ searchBlur: !searchFlag }" v-if="searchList.length !== 0">
          <li
            v-for="(item, index) in searchList"
            :key="index"
            :class="{ searchListActive: searchListCurrent === index }"
            @mouseenter="listEnter(index)"
            @click="listActive(item)"
          >
            {{ item.component }}
          </li>
        </ul>
      </div>
    </div>
    <div class="systemBox">
      <div v-for="(item, index) in system" :key="index" class="system" :class="{ systemActive: systemCurrent === index }">
        <span @click="systemClick(index)">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.box {
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  height: 64px;
  background-color: #fff;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 245);
}
.menuBox,
.systemBox {
  display: flex;
  height: 100%;
  align-items: center;
  .menu {
    padding: 0 20px;
    line-height: 64px;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #18a058;
    }
  }
  .system {
    padding: 0 10px;
    margin-right: 5px;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 2px;
    &:hover {
      background-color: rgb(236, 232, 232);
    }
  }
}
.searchBox {
  display: flex;
  align-items: center;
  position: relative;
}
input {
  transition: all 0.3s;
  height: 30px;
  border: 1px solid rgb(226, 226, 230);
  border-radius: 4px;
  text-indent: 8px;
  outline: none;
  &::-webkit-input-placeholder {
    color: #aab2bd;
    font-size: 14px;
  }
  &:hover {
    border-color: #18a058;
  }
  &:focus {
    border-color: #18a058;
    box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.2);
  }
}
.list {
  position: absolute;
  width: 160px;
  background-color: #fff;
  box-shadow: 0 0 1px 1px rgb(226, 226, 230);
  top: 38px;
  border-radius: 2px;
  left: 3px;
  margin: 0;
  padding: 5px;
  li {
    list-style: none;
    text-align: left;
    transition: all 0.3s;
    cursor: pointer;
    border-radius: 2px;
    padding: 5px 5px;
    &:hover {
      background-color: pink;
    }
  }
}
.menuActive {
  color: #18a058;
}
.systemActive {
  background-color: rgb(236, 232, 232);
}
.searchListActive {
  background-color: pink;
}
.searchBlur {
  display: none;
}
</style>
