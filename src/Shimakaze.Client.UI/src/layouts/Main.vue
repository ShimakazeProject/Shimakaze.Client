<template>
<Transition
  appear
  appear-from-class="top-bar-from"
  appear-active-class="top-bar-active"
  appear-to-class="top-bar-to"
>
  <TopBar />
</Transition>
<RouterView />
</template>

<script lang="ts" setup>
import TopBar from '@/components/TopBar.vue'

</script>

<style lang="sass">
.top-bar-active
  transition: all 0.5s ease

.top-bar-from
  transform: translateY(calc(-100vh / 16))

.top-bar-to
  transform: unset

</style>
