<template>
  <div
    flex
    h-screen
  >
    <div
      flex-1
      self-center
      text-center
    >
      <div>
        战役页
      </div>
    </div>
    <div
      flex
      flex-col
      gap-2
      w-32
      p-2
    >
      <div flex-1 />
      <SCButton
        content="返回"
        @click="go('back')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SCButton from '@/components/SCButton.vue'
import { go } from '@/routers'

</script>
