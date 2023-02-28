<template path="/">
<ClientButton
  v-for="button, index in buttons" :key="index"
  :content="button.name"
  @click="router.push(button.path)"
/>
</template>

<script lang="ts" setup>
import ClientButton from '@/components/ClientButton.vue'
import { router } from '@/router'
import { getMainMenus } from '@/services/main'
import { onMounted, ref } from 'vue'
/* global Services */

const buttons = ref<Services.Button[]>()

onMounted(async () => {
  buttons.value = await getMainMenus()
})

</script>
