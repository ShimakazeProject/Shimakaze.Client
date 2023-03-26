<!-- 这个页面是客户端关闭前应该展示的 -->
<template path="/bye">
<div class="bye page" />
</template>

<script lang="ts" setup>
import { appWindow } from '@tauri-apps/api/window'
window.setTimeout(appWindow.close, 3000)
</script>
