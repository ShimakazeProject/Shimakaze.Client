<template>
  <div flex flex-col h-screen class="main-page">
    <TopBar />
    <div flex flex-1 flex-row justify-center items-center>
      <div m-4 grid grid-cols-1 gap-4 min-w-64>
        <ClientButton content="战役" />
        <ClientButton content="遭遇战" />
        <ClientButton content="联机游戏" />
        <ClientButton content="游戏设置" />
        <ClientButton content="帮助" disabled />
      </div>
      <div m-4 flex-auto flex flex-col gap-4>
        <ClientCard>
          <template #title>
            这是什么？
          </template>
          <div flex items-center>
            <div flex-1 inline-block>
              这是什么？卡片？看一下！<br>
              这是什么？卡片？看一下！<br>
              这是什么？卡片？看一下！<br>
              这是什么？卡片？看一下！<br>
              这是什么？卡片？看一下！<br>
              这是什么？卡片？看一下！<br>
              这是什么？卡片？看一下！<br>
            </div>
            <div flex-1>
              <img w-32 h-32 src="/94171989_p0.jpg" alt="img">
            </div>
          </div>
        </ClientCard>
        <div flex gap-4 items-stretch>
          <ClientCard flex-1>
            <template #title>
              标题
            </template>
            噢我亲爱的红色的枫树女士，您好像忘记了给我这些卡片的比例了。
          </ClientCard>
          <ClientCard flex-1>
            <template #title>
              标题
            </template>
            没有这些比例，我没有办法去给这些卡片设置一个相对好看的位置。
          </ClientCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ClientButton from '@c/ClientButton.vue'
// import { go } from '@/routers'
import TopBar from '@/components/TopBar.vue'
import ClientCard from '@/components/ClientCard.vue'

</script>

<style>
.main-page {
  background-image: url("/teahub.io-kantai-collection-wallpaper-2976320.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
