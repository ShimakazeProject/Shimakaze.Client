<template>
<div class="top-bar">
  <div class="level-bar" :style="{width: `${account.levelProgress}%`}" />

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
</template>

<script lang="ts" setup>
import { useAccountStore } from '@/repositories/account'
const account = useAccountStore()
</script>

<style lang="sass">
@use "sass:color"
@use '@/styles/common' as *

@mixin transition
  transition-property: all
  transition-delay: .5s
  transition-duration: 1s
  transition-timing-function: ease

$level-bar-height: 2px
$level-bar-height-active: 4px
$avatar-border-width: 2px
$avatar-border-width-active: 4px

.top-bar
  @include transition
  transition-property: height, background-color, padding-top, padding-left
  z-index: 9999
  height: calc(100vh / 32)
  width: 100vw
  background-color: #{color.change($color-neutral-tertiary, $alpha: 0.25)}
  display: flex
  align-items: center
  padding-left: 1rem
  padding-top: $level-bar-height
  box-sizing: content-box
  position: fixed

  *
    @include transition

  .level-bar
    position: absolute
    left: 0
    top: 0
    height: $level-bar-height
    background-color: #{color.change($color-theme-dark, $alpha: 0.5)}

  & > div
    display: inline-block

  .avatar
    height: 100%
    box-sizing: border-box
    border-style: solid
    border-width: $avatar-border-width
    border-color: #{color.change($color-neutral-tertiary-alt, $alpha: 0.5)}

    img
      height: 100%
      object-fit: cover
      vertical-align: top

  .level
    $size: 1rem
    font-size: .75rem
    width: $size
    height: $size
    text-align: center
    margin: .25rem
    border-radius: 50%
    border-width: 2px
    border-style: solid
    border-color: #{color.change($color-theme-dark, $alpha: 0.5)}

  .info
    .account
      transform: translateY(0.6rem)

    .descriptions
      opacity: 0
      z-index: -1
      transform: translateY(-1.5rem)

  &:hover
    height: calc(100vh / 16)
    padding-top: $level-bar-height-active
    padding-left: 2rem
    background-color: #{color.change($color-neutral-tertiary, $alpha: 0.5)}

    .level-bar
      height: $level-bar-height-active

    .avatar
      border-width: $avatar-border-width-active
      border-color: #{color.change($color-theme-primary, $alpha: 0.5)}

    .level
      $size: 1.5rem
      font-size: 1rem
      width: $size
      height: $size
      border-width: 4px

    .info
      .account
        transform: unset

      .descriptions
        opacity: 1
        transform: translateY(-0.25rem)
</style>
