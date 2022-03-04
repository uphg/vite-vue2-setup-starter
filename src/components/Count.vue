<template>
  <div class="count">
    <p>{{ counter.count }}</p>
    <p>
      <button @click="setCount1">修改原数据</button>
      <button @click="setCount2">调用 $patch</button>
      <button @click="setCount3">调用 actions 方法</button>
      
    </p>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~src/stores/modules/counter'
const counter = useCounterStore()

const setCount1 = () => {
  counter.count++
}

const setCount2 = () => {
  // with autocompletion ✨
  counter.$patch({ count: counter.count + 2 })
}

const setCount3 = () => {
  // or using an action instead
  counter.increment()
}
</script>