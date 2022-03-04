<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button>按钮</el-button>
    <button type="button" @click="count++">计数: {{ count }}</button>
    <p>
      编辑
      <code>components/HelloWorld.vue</code> 测试模块热更新.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/composition-api'
import type { PropType } from '@vue/runtime-dom';

defineProps({
  msg: String as PropType<string>
})

const count = ref(0)
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
