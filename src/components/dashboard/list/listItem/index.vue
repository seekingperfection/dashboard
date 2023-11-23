<template>
  <router-link
    class="table-list-item !cursor-default normal-case"
    :class="{
      '!cursor-pointer !text-blue-100': headerItem && headerItem.title === COMMON_HEADER_VALUES.TITLE,
      checkbox,
      first: index === 0,
    }"
    :to="headerItem && headerItem.title === COMMON_HEADER_VALUES.TITLE ? `/product/${item.id}` : ''"
  >
    <span v-if="!checkbox">
      {{
        headerItem && headerItem.title === COMMON_HEADER_VALUES.PRICE && item
          ? `$${item[headerItem.title.toLowerCase()]}`
          : headerItem && item
            ? item[headerItem.title.toLowerCase()]
            : ''
      }}
    </span>
    <Checkbox v-if="checkbox" />
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ListHeaderItem } from '@/configs/lists'
import Checkbox from '@/components/elements/checkBox/index.vue'

enum COMMON_HEADER_VALUES {
  TITLE = 'Title',
  PRICE = 'Price',
}

interface Props {
  item?: any
  headerItem?: ListHeaderItem
  checkbox?: boolean
  index?: number
}

const { item, headerItem, checkbox, index } = defineProps<Props>()
</script>

<style scoped lang="scss">
.table-list-item {
  @apply flex min-h-[78px] w-full min-w-[150px] items-center justify-start bg-white px-4 py-2.5 text-left text-dark-100/[.65];
}

.table-list-item.checkbox {
  @apply w-max pl-[26px];

  min-width: unset;
}

.table-list-item.first {
  @apply justify-start pl-3.5;

  span {
    @apply text-left;
  }
}
</style>
