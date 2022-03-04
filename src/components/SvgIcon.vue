<template>
  <svg aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from '@vue/composition-api'
import type { PropType } from '@vue/composition-api'

const props = defineProps({
  name: {
    type: String as PropType<string>,
    default: ''
  }
})

const iconName = computed(() => `#icon-${props.name}`)
</script>