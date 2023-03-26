<template>
<div class="background">
  <video autoplay loop src="/background.mp4">
    <picture>
      <source srcset="/background.png" type="image/png">
      <img src="/background.png" alt="background">
    </picture>
  </video>
</div>
</template>

<style lang="scss">
.background {
  height: 100vh;
  position: absolute;
  width: 100vw;
  z-index: -9999;

  video,
  picture,
  picture > img {
    height: 100vh;
    object-fit: cover;
    width: 100vw;
  }

  [rounded] &,
  [rounded] & video {
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
