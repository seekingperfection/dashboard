<template>
  <th
    class="header-item"
    :class="{ sortable: item && item.sortOptions, active: isActive, checkbox, first: index === 0 }"
    @click="handleHeaderItemClick"
  >
    <span v-if="!checkbox && item">{{ item.title }}</span>
    <img v-if="!checkbox && item && item.sortOptions" :src="getChevron" alt="chevron" class="ml-2 h-[12px] w-[12px]" />
    <Checkbox v-if="checkbox" />
  </th>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, watchEffect } from 'vue'
import { ListHeaderItem } from '@/configs/lists'
import { useStore } from 'vuex'
import { SORT_METHOD_TYPES } from '@/types/api/sortInterface'
import Checkbox from '@/components/elements/checkBox/index.vue'

interface Props {
  item?: ListHeaderItem
  isActive?: boolean
  index?: number
  checkbox?: boolean
}

const store = useStore()
const { item, isActive, index, checkbox } = defineProps<Props>()
const sortingState = ref<boolean>(false)

const emits = defineEmits<{
  (event: 'update:sort', id: number): void
}>()

const handleHeaderItemClick = () => {
  if (item && item.sortOptions) {
    sortingState.value = !sortingState.value

    if (index !== undefined && !isNaN(index)) {
      store.dispatch('sortProductsByLocally', {
        sortBy: item.sortOptions.sortBy,
        sortMethod: sortingState.value ? SORT_METHOD_TYPES.ASC : SORT_METHOD_TYPES.DESC,
      })

      emits('update:sort', index)
    }
  }
}

const getChevron = computed(() => {
  return sortingState.value
    ? new URL(`@/assets/icons/chevron-bottom.svg`, import.meta.url).href
    : new URL(`@/assets/icons/chevron-up.svg`, import.meta.url).href
})

watchEffect(() => {
  const sortBy = store.getters.sortBy

  if (item && item.sortOptions && sortBy !== null && sortBy !== item.sortOptions.sortBy) {
    sortingState.value = false
  }
})
</script>

<style scoped lang="scss">
.header-item {
  @apply flex h-[72px] w-full min-w-[150px] items-center justify-start bg-white px-4 py-2.5 font-display;

  img {
    @apply hidden;
  }
}

.header-item.checkbox {
  @apply w-max pl-[26px];

  min-width: unset;
}

.header-item.active {
  img {
    @apply relative top-[1px];

    display: flex !important;
  }
}

.header-item.first {
  @apply justify-start pl-[10px];
}

.header-item.sortable {
  @apply cursor-pointer;

  &:hover {
    img {
      @apply relative top-[1px];

      display: flex !important;
    }
  }
}
</style>
