<!-- 这个页面是客户端初次启动时应该展示的 -->
<template path="/hello">
<div class="hello page" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

onMounted(() => {
  window.setTimeout(async () => await router.push('/home'), 3000)
})

</script>
