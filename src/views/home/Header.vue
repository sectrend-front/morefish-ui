<script setup lang="ts">
import { menu, system } from './const '
import { ref } from 'vue'
const menuCurrent = ref<number>()
const systemCurrent = ref<number>()
const menuClick = (index) => {
  menuCurrent.value = index
}
const systemClick = (index) => {
  systemCurrent.value = index
}
</script>
<template>
  <div class="box">
    <div>icon</div>
    <div class="menuBox">
      <div v-for="(item, index) in menu" :key="index" class="menu" @click="menuClick(index)">
        <span :class="{ menuActive: menuCurrent === index }">{{ item }}</span>
      </div>
      <input type="text" placeholder="搜索" />
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
.menuActive {
  color: #18a058;
}
.systemActive {
  background-color: rgb(236, 232, 232);
}
</style>
