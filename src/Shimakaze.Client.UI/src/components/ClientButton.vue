<template>
  <button class="client-button" :disabled="!!disabled" @click="$emit('click')">
    <slot>
      {{ content }}
    </slot>
  </button>
</template>

<script lang="ts" setup>
export interface CCButtonProps {
  content?: string
  disabled?: boolean
}
export interface CCButtonEmits {
  (event: 'click'): void
}

defineProps<CCButtonProps>()
defineEmits<CCButtonEmits>()
</script>

<style lang="scss">
@use "@/styles/button.scss";
</style>
