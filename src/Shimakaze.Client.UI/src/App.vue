<template>
<RouterView v-slot="{Component, route}">
  <Transition
    :name="getTransitionName(route.meta.transition as string ?? 'load')"
  >
    <component :is="Component" />
  </Transition>
</RouterView>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { system } from '@a/kernel'
import { init } from '@/services/i18n'

system().then(console.log).catch(console.error)
init('zh-Hans', '').catch(console.error)
const getTransitionName = (route: string): string => {
  return route
}
</script>

<style>
:root {
  --shimakaze-transition-delay: .5s;
  --shimakaze-transition-scala: scale(.9);
  --shimakaze-transition-translate-y: translateY(120%);
}

.push-leave-active,
.push-enter-active,
.pop-leave-active,
.pop-enter-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.push-leave-active{
  z-index: -1;
  animation: push-out var(--shimakaze-transition-delay) ease-in-out;
}

.push-enter-active{
  z-index: 1;
  animation: push-in var(--shimakaze-transition-delay) ease-in-out;
}

.pop-leave-active{
  z-index: 1;
  animation: pop-out var(--shimakaze-transition-delay) ease-in-out;
}

.pop-enter-active{
  z-index: -1;
  animation: pop-in var(--shimakaze-transition-delay) ease-in-out;
}

@keyframes push-out {
  0% {
    transform: none;
  }

  100%{
    transform: var(--shimakaze-transition-scala);
  }
}

@keyframes push-in {
  0%{
    transform: var(--shimakaze-transition-scala)
      var(--shimakaze-transition-translate-y);
  }

  100% {
    transform: none;
  }
}

@keyframes pop-out {
  0% {
    transform: none;
  }

  100%{
    transform: var(--shimakaze-transition-scala)
      var(--shimakaze-transition-translate-y);
  }
}

@keyframes pop-in {
  0%{
    transform: var(--shimakaze-transition-scala);
  }

  100%{
    transform: none;
  }
}
</style>
