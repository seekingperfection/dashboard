<template>
  <div class="flex w-full flex-col px-2.5 lg:px-[40px]">
    <span class="text-2xl font-medium">Products information</span>
    <div class="mt-[30px] flex w-full flex-col gap-y-[22px] lg:flex-row lg:gap-x-[22px] lg:gap-y-0">
      <TextField
        :label="`Title`"
        :placeholder="`Enter Title`"
        :use-debounce="true"
        :clear-on-blur="true"
        @update:value="handleTitleChange"
      />
      <TextField
        :label="`Brand`"
        :placeholder="`Enter Brand`"
        :use-debounce="true"
        :clear-on-blur="true"
        @update:value="handleBrandChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from '@/components/elements/textField/index.vue'
import { useStore } from 'vuex'

const store = useStore()

const handleTitleChange = async (searchValue: string): Promise<void> => {
  if (searchValue.length === 0) {
    await store.dispatch('fetchProducts')

    return
  }

  await store.dispatch('fetchProductsBySearch', searchValue)
}

const handleBrandChange = (searchValue: string): void => {
  store.dispatch('filterProductsByBrandLocally', searchValue)
}
</script>
