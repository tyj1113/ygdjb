<template>
  <el-config-provider :locale="locale">
    <router-view/>
  </el-config-provider>
</template>
<script setup>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale=zhCn
</script>
<style>
/*html, body {*/
/*  width: 100%;*/
/*  height: 100%;*/
/*}*/

/*#app {*/
/*  position: absolute;*/
/*  left: 0;*/
/*  top: 0;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  overflow: auto;*/
/*}*/
</style>
