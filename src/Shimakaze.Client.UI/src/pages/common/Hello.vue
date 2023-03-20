<!-- 这个页面是客户端初次启动时应该展示的 -->
<template path="/hello">
Hello
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  const router = useRouter()
  window.setTimeout(async () => await router.push('/home'), 3000)
})

</script>
