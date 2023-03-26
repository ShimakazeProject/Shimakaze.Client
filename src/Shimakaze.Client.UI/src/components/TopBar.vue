<template>
<div data-tauri-drag-region class="top-bar rounded">
  <div
    data-tauri-drag-region class="level-bar"
    :style="{ width: `${account.levelProgress}%` }"
  />

  <div data-tauri-drag-region class="content">
    <div class="left">
      <div class="avatar">
        <img src="/avatar.jpg" alt="avatar">
      </div>

      <div class="level">
        {{ account.level }}
      </div>

      <div class="info">
        <div class="account">
          {{ account.name }}
        </div>
        <div class="descriptions">
          {{ account.desc }}
        </div>
      </div>
    </div>

    <div data-tauri-drag-region class="center" />

    <div class="right">
      <Button
        :styles="{
          padding: '0 0.25rem',
          shadowSize: '0.25rem',
          fontSize: '0.5rem',
          textStrokeWidth: 'unset'
        }"
        @click="appWindow.minimize()"
      >
        _
      </Button>
      <Button
        :styles="{
          padding: '0 0.25rem',
          shadowSize: '0.25rem',
          fontSize: '0.5rem',
          textStrokeWidth: 'unset'
        }"
        @click="appWindow.toggleMaximize()"
      >
        □
      </Button>
      <Button
        :styles="{
          padding: '0 0.25rem',
          shadowSize: '0.25rem',
          fontSize: '0.5rem',
          textStrokeWidth: 'unset',
          hoverBackground: 'red',
          activeBackground: 'red'
        }"
        @click="router.push('/bye')"
      >
        ×
      </Button>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { useAccountStore } from '@/repositories/account'
import { appWindow } from '@tauri-apps/api/window'
import { useRouter } from 'vue-router'
import Button from './Button.vue'
const router = useRouter()
const account = useAccountStore()
</script>
