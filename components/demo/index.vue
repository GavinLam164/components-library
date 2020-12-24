<template>
  <el-button>
    {{text}}
  </el-button>
</template>

<script>
import { Button } from 'element-ui'
export default {
  components: {
    ElButton: Button
  },
  props: ['text']
}
</script>

<style>
</style>