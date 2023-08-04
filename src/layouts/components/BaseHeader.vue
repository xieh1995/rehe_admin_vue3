<script lang="ts" setup>
import { toggleDark } from "@/composables";
import {
  Sunny,
  Moon
  
} from "@element-plus/icons-vue";
</script>

<template>
  <el-menu class="el-menu-demo" :ellipsis="false" mode="horizontal">
    <div class="header-logo" style="display: flex">
      LOGO ADMIN
      <!-- <h2>LOGO ADMIN</h2> -->
    </div>
    <div style="flex-grow:1" />
    <el-menu-item index="1">
      <RouterLink to="/">首页</RouterLink>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>工作空间</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="4">
      <RouterLink to="/test">测试页面</RouterLink>
    </el-menu-item>
    <div style="flex-grow:10" />
    <el-menu-item index="4">展开</el-menu-item>
    <el-menu-item index="6" @click="toggleDark()">
      <div>
        <el-icon><Sunny /></el-icon>
      </div>
     
    </el-menu-item>
    <el-sub-menu index="5">
      <template #title>游客:admin</template>
      <el-menu-item index="5-1">item one</el-menu-item>
      <el-menu-item index="5-2">item two</el-menu-item>
      <el-menu-item index="5-3">item three</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<style>
.header-logo{
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 26px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>