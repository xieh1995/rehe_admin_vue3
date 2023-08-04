<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
  <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <template #title>平台概括</template>
    </el-menu-item>
    <el-sub-menu index="1-4">
      <template #title>
        <el-icon><location /></el-icon>
        <span>到发送到发送到发11</span>
      </template>
        <el-menu-item index="1-4-1">到发送到发送到发</el-menu-item>
      </el-sub-menu>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>到发送到发送到发11</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">到发送到发送到发</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">到发送到发送到发</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>自定义菜单</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>自定义菜单</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>

        <RouterLink to="/testmain">自定义菜单</RouterLink>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>


<style>
.el-menu-vertical-demo{
  flex: 1;
}
</style>