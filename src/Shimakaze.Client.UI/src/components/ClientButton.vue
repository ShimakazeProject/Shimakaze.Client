<template>
  <button class="client-button" :disabled="!!disabled" @click="$emit('click')">
    {{ content }}
    <slot v-if="!content" />
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
@use "sass:color";
@use "@/styles/theme.scss";

.client-button {
  padding: 0.25rem 2rem;
  font-size: large;
  font-weight: bold;
  border: none;
  transition: all 0.25s ease;
  -webkit-text-stroke-width: 1px;
  color: #{theme.$sc-white};
  -webkit-text-stroke-color: #{theme.$sc-black};
  background-color: #{color.change(theme.$sc-neutral-tertiary, $alpha: 0.5)};
  box-shadow: 0.5rem 0.5rem #{color.change(theme.$sc-neutral-dark, $alpha: 0.5)};

  &:hover {
    background-color: #{color.change(theme.$sc-neutral-tertiary-alt, $alpha: 0.5)};
    box-shadow: 0.5rem 0.5rem #{color.change(theme.$sc-neutral-dark, $alpha: 0.5)};
  }

  &:active {
    background-color: #{color.change(theme.$sc-neutral-secondary-alt, $alpha: 0.5)};
    box-shadow: 0 0 #{color.change(theme.$sc-neutral-dark, $alpha: 0.5)};
    transform: translate(0.5rem, 0.5rem);
  }

  &:disabled {
    color: #{color.change(theme.$sc-white, $alpha: 0.5)};
    -webkit-text-stroke-color: #{color.change(theme.$sc-black, $alpha: 0.5)};
    background-color: #{color.change(theme.$sc-neutral-tertiary, $alpha: 0.5)};
    box-shadow: 0.5rem 0.5rem #{color.change(theme.$sc-neutral-dark, $alpha: 0.5)};

    &:active {
      transform: unset;
    }
  }
}
</style>
