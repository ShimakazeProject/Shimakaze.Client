<template>
<button
  class="client-button"
  :disabled="disabled"
  @click="$emit('click')"
>
  <slot>
    {{ content }}
  </slot>
</button>
</template>

<script lang="ts" setup>
export interface ButtonProps {
  content?: string
  disabled?: boolean
}
export interface ButtonEmits {
  (event: 'click'): void
}

defineProps<ButtonProps>()
defineEmits<ButtonEmits>()
</script>

<style lang="sass">
@use "sass:color"
@use '@/styles/common' as *

.client-button
  padding: 0.25rem 2rem
  font-size: large
  font-weight: bold
  border: none
  transition: all 0.25s ease
  -webkit-text-stroke-width: 1px
  color: #{$color-white}
  -webkit-text-stroke-color: #{$color-black}
  background-color: #{color.change($color-neutral-tertiary, $alpha: 0.5)}
  box-shadow: 0.5rem 0.5rem #{color.change($color-neutral-dark, $alpha: 0.5)}

  &:hover
    background-color: #{color.change($color-neutral-tertiary-alt, $alpha: 0.5)}
    box-shadow: 0.5rem 0.5rem #{color.change($color-neutral-dark, $alpha: 0.5)}

  &:active
    background-color: #{color.change($color-neutral-secondary-alt, $alpha: 0.5)}
    box-shadow: 0 0 #{color.change($color-neutral-dark, $alpha: 0.5)}
    transform: translate(0.5rem, 0.5rem)

  &:disabled
    color: #{color.change($color-white, $alpha: 0.5)}
    -webkit-text-stroke-color: #{color.change($color-black, $alpha: 0.5)}
    background-color: #{color.change($color-neutral-tertiary, $alpha: 0.5)}
    box-shadow: 0.5rem 0.5rem #{color.change($color-neutral-dark, $alpha: 0.5)}

    &:active
      transform: unset

</style>
