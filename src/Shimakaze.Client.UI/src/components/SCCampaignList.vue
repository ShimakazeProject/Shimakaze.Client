<template>
  <div flex>
    <div
      v-for="item, index in items"
      :key="index"
      @click="$emit('click', item)"
    >
      <img
        :src="item.icon"
        :alt="item.name"
        w-4
        h-4
      >
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CampaignInfo } from '@m/CampaignInfo'

export interface SCCampaignListProps{
  items: CampaignInfo[]
}
export interface SCCampaignListEmits{
  (e:'click', campaign: CampaignInfo): void
}

defineProps<SCCampaignListProps>()
defineEmits<SCCampaignListEmits>()

</script>
