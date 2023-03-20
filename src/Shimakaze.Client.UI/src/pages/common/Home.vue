<!-- 主菜单页面 -->
<template path="/home">
<div class="page home">
  <div class="button-pane">
    <div class="space" />
    <Button content="新战役" @click="router.push('/campaign')" />
    <Button content="遭遇战" @click="router.push('/skirmish')" />
    <Button content="在线游戏" @click="router.push('/online')" />
    <Button content="局域网" @click="router.push('/lan')" />
    <Button content="统计信息" @click="router.push('/statistics')" />
    <Button content="设置" @click="router.push('/settings')" />
    <div class="space" />
    <Button content="退出" @click="router.push('/bye')" />
  </div>
</div>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
import { router } from '@/router'
import { getMainMenus } from '@/services/main'
import { onMounted, ref } from 'vue'
/* global Services */

const buttons = ref<Services.Button[]>()

onMounted(async () => {
  buttons.value = await getMainMenus()
})

</script>

<style lang="sass">
.page.home

  .button-pane
    width: 12rem
    height: calc(100% - 1rem)
    display: flex
    flex-direction: column
    row-gap: 1rem
    position: absolute
    right: 1rem
    top: 0

    .space
      flex: 1
</style>
