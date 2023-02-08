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
        首页
      </div>
    </div>
    <div
      flex
      flex-col
      gap-2
      w-32
      p-2
    >
      <SCButton
        content="战役"
        @click="go('/campaign')"
      />
      <SCButton content="遭遇战" />
      <SCButton content="在线游戏" />
      <SCButton content="统计" />
      <SCButton content="设置" />
      <SCButton
        :content="isDark ? '深色' :'浅色'"
        @click="toggle"
      />
      <div flex-1 />
      <SCButton
        content="退出"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SCButton from '@/components/SCButton.vue'
import { go } from '@/routers'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggle = useToggle(isDark)

</script>
