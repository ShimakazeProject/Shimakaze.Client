<template>
<Transition
  appear
  appear-from-class="from"
  appear-active-class="active"
  appear-to-class="to"
>
  <TopBar />
</Transition>
<RouterView />
</template>

<script lang="ts" setup>
import TopBar from '@/components/TopBar.vue'

</script>

<style lang="scss">
@use "@/styles/topbar" as *;
</style>
