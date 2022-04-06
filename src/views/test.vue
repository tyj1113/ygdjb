<template>
<div v-if="show">show</div>
</template>

<script setup>
import test2 from './test2'
import {ref,inject} from 'vue'
const show=ref(false)
const emitter=inject('mitt')
emitter.on('show',(v)=>{
  console.log(22222222222222);
  show.value=v
})
</script>

<style scoped lang="scss">
div{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100px;
  height: 100px;
  background: red;
}
</style>
