<template>
  <button
    px-2
    py-1
    border-2
    dark:text-light
    dark:bg-black
    bg-white
    text-dark
    @click="$emit('click')"
  >
    {{ content }}
    <slot v-if="!content" />
  </button>
</template>

<script lang="ts" setup>
export interface CCButtonProps{
  content?: string
}
export interface CCButtonEmits{
  (event: 'click'): void
}

defineProps<CCButtonProps>()
defineEmits<CCButtonEmits>()
</script>
