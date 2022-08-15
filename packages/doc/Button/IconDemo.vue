<script setup lang="ts">
import Edit from './icon/Edit.vue'
import { ElButton, ElIcon } from 'element-plus'
import 'element-plus/dist/index.css'
</script>

<template>
  <div>
    <el-button type="primary">
      <template #icon>
        <ElIcon>
          <Edit />
        </ElIcon>
      </template>
      233
    </el-button>

    <mf-button type="primary" ghost>
      <template #icon>
        <mf-icon>
          <Edit />
        </mf-icon>
      </template>
      不准点！
    </mf-button>
    <mf-button disabled>可以点！</mf-button>
    <mf-button type="success" disabled>以点！</mf-button>
    <mf-button type="info" dashed ghost disabled>点！</mf-button>
    <mf-button type="warning" size="small" disabled>！</mf-button>
  </div>
</template>
