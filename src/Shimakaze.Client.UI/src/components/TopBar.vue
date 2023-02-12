<template>
  <div class="top-bar">
    <div class="avatar">
      <img src="/avatar.jpg" alt="avatar">
    </div>

    <div class="level">
      14
    </div>

    <div class="info">
      <span class="account">
        挖坑狂魔岛风酱!
      </span>
      <span class="desc">
        只管挖，不管填!
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
@use "sass:color";
@use "@/styles/theme.scss";

.top-bar {
  height: 2rem;
  width: 100vw;
  max-height: 16rem;
  display: flex;
  position: fixed;
  background-color: #{color.change(theme.$sc-neutral-tertiary, $alpha: 0.5)};
  box-sizing: content-box;
  justify-content: left;
  align-items: center;
  gap: 1rem;
  transition: all .25s ease;

  &:hover {
    height: 8%;

    .level {
      padding: 0.25rem;
      border-style: solid;
      border-width: 4px;
      border-color: #{color.change(theme.$sc-neutral-primary, $alpha: 0.5)};
      background-color: #{color.change(theme.$sc-neutral-tertiary-alt, $alpha: 0.5)};
    }

    .info {
      .desc {
        display: unset;
        opacity: unset;
        position: unset;
      }
    }
  }

  .avatar {
    display: inline-block;
    height: 100%;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
    border-style: solid;
    border-width: 4px;
    border-color: #{color.change(theme.$sc-neutral-primary, $alpha: 0.5)};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .level {
    border-radius: 50%;
    transition: all .25s ease;
  }

  .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .25s ease;

    .account {
      font-weight: bold;
      transition: all .25s ease;
    }

    .desc {
      display: hidden;
      position: absolute;
      opacity: 0;
      transition: opacity .25s ease;
    }
  }
}
</style>
