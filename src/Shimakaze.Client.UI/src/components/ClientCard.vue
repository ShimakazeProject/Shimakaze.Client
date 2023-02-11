<template>
  <div class="client-card">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@use "sass:color";
@use "@/styles/theme.scss";

.client-card {
  .title {
    padding: 0.5rem 1rem;
    font-size: larger;
    font-weight: bolder;
    border-style: solid;
    border-width: 2px;
    border-color: #{color.change(theme.$sc-neutral-secondary, $alpha: 0.5)};
    background-color: #{color.change(theme.$sc-neutral-secondary, $alpha: 0.5)};
  }

  .content {
    padding: 0.5rem 1rem;
    border-style: solid;
    border-width: 2px;
    border-color: #{color.change(theme.$sc-neutral-secondary, $alpha: 0.5)};
    background-color: #{color.change(theme.$sc-neutral-tertiary, $alpha: 0.5)};
  }
}
</style>
