<template path="/">
<ClientButton
  v-for="button, index in buttons" :key="index"
  :content="button.name"
/>
</template>

<script lang="ts" setup>
import ClientButton from '@/components/ClientButton.vue'
import { getMainMenus } from '@/services/main'
import { onMounted, ref } from 'vue'
/* global Services */

const buttons = ref<Services.Button[]>()

onMounted(async () => {
  buttons.value = await getMainMenus()
})

</script>
