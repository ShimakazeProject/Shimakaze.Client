<template>
  <RouterView v-slot="slot">
    <Transition>
      <component :is="slot.Component" />
    </Transition>
  </RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { system } from '@a/kernel'
import { init } from '@/services/i18n'

system().then(console.log).catch(console.error)
init('zh-Hans', '').catch(console.error)
</script>
