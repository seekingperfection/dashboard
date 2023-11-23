<template>
  <div class="list-table-container px-2.5 py-[34px] lg:px-[40px]">
    <table v-if="list && list.listHeader?.length && data !== null && data.length" class="list">
      <tr class="list-header table-row">
        <ListHeaderColumn v-if="list.listOptions?.markAsChecked" :checkbox="true" />
        <ListHeaderColumn
          v-for="(item, index) in list.listHeader"
          :key="index"
          :item="item"
          :index="index"
          :is-active="selectedSort === index"
          @update:sort="updateSelectedSort"
        />
      </tr>
      <tr v-for="(item, index) in data" :key="index" class="list-item-row">
        <ListItem v-if="list.listOptions?.markAsChecked" :checkbox="true" />
        <ListItem
          v-for="(headerItem, headerIndex) in list.listHeader"
          :key="headerIndex"
          :item="item"
          :header-item="headerItem"
          :index="headerIndex"
        />
      </tr>
    </table>
    <div v-else>0 items found.</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { LIST_TYPES, lists, List } from '@/configs/lists'
import ListHeaderColumn from '@/components/dashboard/list/listHeaderColumn/index.vue'
import ListItem from '@/components/dashboard/list/listItem/index.vue'

interface Props {
  listConfigId: LIST_TYPES
  data: any
}

const { listConfigId, data } = defineProps<Props>()
const selectedSort = ref<number | null>(null)
const list: List | undefined = lists.find((list) => list.id === listConfigId)

const updateSelectedSort = (selectedId: number | null) => {
  selectedSort.value = selectedId
}
</script>

<style scoped lang="scss">
.list-table-container {
  .list {
    @apply flex w-full flex-col overflow-auto;

    &-header {
      @apply flex w-full rounded-t border-b border-gray-200 bg-white;
    }

    &-item-row {
      @apply flex w-full border-b bg-white;
    }
  }
}
</style>
