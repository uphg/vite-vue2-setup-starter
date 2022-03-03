<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      推荐 IDE 设置:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite 文档
      </a>
    </p>

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
