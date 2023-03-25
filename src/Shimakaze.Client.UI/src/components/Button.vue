<template>
<button
  class="client-button"
  :disabled="disabled"
  :style="{
    '--button-padding': styles?.padding,
    '--button-shadow-size': styles?.shadowSize,
    '--button-font-size': styles?.fontSize,
    '--button-font-weight': styles?.fontWeight,
    '--button-text-stroke-width': styles?.textStrokeWidth,
    '--button-normal-foreground': styles?.normalForeground,
    '--button-normal-background': styles?.normalBackground,
    '--button-normal-shadow': styles?.normalShadow,
    '--button-normal-stroke': styles?.normalStroke,
    '--button-hover-foreground': styles?.hoverForeground,
    '--button-hover-background': styles?.hoverBackground,
    '--button-hover-shadow': styles?.hoverShadow,
    '--button-hover-stroke': styles?.hoverStroke,
    '--button-active-foreground': styles?.activeForeground,
    '--button-active-background': styles?.activeBackground,
    '--button-active-shadow': styles?.activeShadow,
    '--button-active-stroke': styles?.activeStroke,
    '--button-disable-foreground': styles?.disableForeground,
    '--button-disable-background': styles?.disableBackground,
    '--button-disable-shadow': styles?.disableShadow,
    '--button-disable-stroke': styles?.disableStroke,
  }"
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
  styles?: {
    padding?: string
    shadowSize?: string
    fontSize?: string
    fontWeight?: string
    textStrokeWidth?: string
    normalForeground?: string
    normalBackground?: string
    normalShadow?: string
    normalStroke?: string
    hoverForeground?: string
    hoverBackground?: string
    hoverShadow?: string
    hoverStroke?: string
    activeForeground?: string
    activeBackground?: string
    activeShadow?: string
    activeStroke?: string
    disableForeground?: string
    disableBackground?: string
    disableShadow?: string
    disableStroke?: string
  }
}
export interface ButtonEmits {
  (event: 'click'): void
}

defineProps<ButtonProps>()
defineEmits<ButtonEmits>()
</script>

<style lang="scss">
@use "sass:color";
@use "@/styles/common" as *;

.client-button {
  $opacity: 0.5;

  --button-padding: 0.25rem 2rem;
  --button-shadow-size: 0.5rem;
  --button-font-size: large;
  --button-font-weight: bold;
  --button-text-stroke-width: 1px;

  // normal
  --button-normal-foreground: #{color.change($color-white, $alpha: 1)};
  --button-normal-background: #{color.change($color-neutral-tertiary, $alpha: $opacity)};
  --button-normal-shadow: #{color.change($color-neutral-dark, $alpha: $opacity)};
  --button-normal-stroke: #{color.change($color-black, $alpha: 1)};

  // hover
  --button-hover-foreground: #{color.change($color-white, $alpha: 1)};
  --button-hover-background: #{color.change($color-neutral-tertiary-alt, $alpha: $opacity)};
  --button-hover-shadow: #{color.change($color-neutral-dark, $alpha: $opacity)};
  --button-hover-stroke: #{color.change($color-black, $alpha: 1)};

  // active
  --button-active-foreground: #{color.change($color-white, $alpha: 1)};
  --button-active-background: #{color.change($color-neutral-secondary-alt, $alpha: $opacity)};
  --button-active-shadow: #{color.change($color-neutral-dark, $alpha: $opacity)};
  --button-active-stroke: #{color.change($color-black, $alpha: 1)};

  // disable
  --button-disable-foreground: #{color.change($color-white, $alpha: 1)};
  --button-disable-background: #{color.change($color-neutral-primary-alt, $alpha: $opacity)};
  --button-disable-shadow: #{color.change($color-neutral-dark, $alpha: $opacity)};
  --button-disable-stroke: #{color.change($color-black, $alpha: 1)};

  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }

  background-color: var(--button-normal-background);
  border: none;
  box-shadow: var(--button-shadow-size) var(--button-shadow-size) var(--button-normal-shadow);
  color: var(--button-normal-foreground);
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  padding: var(--button-padding);
  -webkit-text-stroke-color: var(--button-normal-stroke);
  -webkit-text-stroke-width: var(--button-text-stroke-width);
  /* stylelint-disable-next-line plugin/no-low-performance-animation-properties */
  transition: 0.25s ease;
  /* stylelint-disable-next-line plugin/no-low-performance-animation-properties */
  transition-property: color, background-color, box-shadow, -webkit-text-stroke-color, transform;
  user-select: none;

  &:hover,
  &:focus {
    background-color: var(--button-hover-background);
    box-shadow: var(--button-shadow-size) var(--button-shadow-size) var(--button-hover-shadow);
    color: var(--button-hover-foreground);
    -webkit-text-stroke-color: var(--button-hover-stroke);
  }

  &:active {
    background-color: var(--button-active-background);
    box-shadow: 0 0 var(--button-active-shadow);
    color: var(--button-active-foreground);
    -webkit-text-stroke-color: var(--button-active-stroke);
    transform: translate(var(--button-shadow-size), var(--button-shadow-size));
  }

  &:disabled {
    background-color: var(--button-disable-background);
    box-shadow: var(--button-shadow-size) var(--button-shadow-size) var(--button-disable-shadow);
    color: var(--button-disable-foreground);
    -webkit-text-stroke-color: var(--button-disable-stroke);

    &:active {
      transform: unset;
    }
  }
}
</style>
