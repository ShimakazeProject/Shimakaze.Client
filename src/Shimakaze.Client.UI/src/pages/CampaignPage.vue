<template path="/campaign">
<ClientButton
  content="back"
  @click="router.back()"
/>
</template>

<script lang="ts" setup>
import ClientButton from '@/components/ClientButton.vue'
import { router } from '@/router'

</script>
