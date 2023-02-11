<template>
  <div class="top-bar">
    <div class="avatar">
      <img src="/avatar.jpg" alt="avatar">
    </div>
    <div class="level">
      14
    </div>
    <div class="info">
      <div class="account">
        挖坑狂魔岛风酱!
      </div>
      <div class="desc">
        只管挖，不管填!
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style lang="scss">
@use "sass:color";
@use "@/styles/theme.scss";

.top-bar {
  display: flex;
  gap: 1rem;
  background-color: #{color.change(theme.$sc-neutral-tertiary, $alpha: 0.5)};
  align-items: center;

  .avatar {
    display: inline-flex;
    border-style: solid;
    border-width: 4px;
    border-color: #{color.change(theme.$sc-neutral-primary, $alpha: 0.5)};

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  .level {
    padding: 0.25rem;
    border-radius: 50%;
    border-style: solid;
    border-width: 4px;
    border-color: #{color.change(theme.$sc-neutral-primary, $alpha: 0.5)};
    background-color: #{color.change(theme.$sc-neutral-tertiary-alt, $alpha: 0.5)};
    font-weight: bold;
    font-size: large;
  }

  .info {
    .account {
      font-weight: bold;
      font-size: larger;
    }
  }
}
</style>
