<template>
  <div class="relative flex w-full flex-col lg:pl-[230px]">
    <Sidemenu />
    <div class="flex w-full px-2.5 pb-[34px] pt-[34px] lg:px-[40px] lg:pb-[44px] lg:pt-[56px]">
      <SearchBar class="h-auto w-full lg:w-[60%]" />
      <div
        class="ml-2.5 flex h-[52px] w-max items-center justify-center rounded border border-gray-400/[.25] bg-white px-2.5 lg:hidden"
        @click="handleMobileMenuClick"
      >
        Menu
      </div>
      <UserIcons class="hidden w-[40%] lg:flex" />
    </div>
    <ProductInformation />
    <List
      v-if="!store.getters.loading"
      :list-config-id="LIST_TYPES.PRODUCT_LIST"
      :data="store.getters.filteredProducts !== null ? store.getters.filteredProducts : store.getters.products"
    />
    <Loading v-else />
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import Sidemenu from '@/components/dashboard/sidemenu/index.vue'
import SearchBar from '@/components/elements/searchBar/index.vue'
import UserIcons from '@/components/dashboard/userIcons/index.vue'
import ProductInformation from '@/components/dashboard/productInformation/index.vue'
import List from '@/components/dashboard/list/index.vue'
import Loading from '@/components/elements/loading/index.vue'
import { LIST_TYPES } from '@/configs/lists'

const store = useStore()

const clearFilterValue = (): void => {
  store.dispatch('clearFilterValue')
}

onMounted(async () => {
  clearFilterValue()

  await store.dispatch('fetchProducts')
})

const handleMobileMenuClick = () => {
  alert(
    'Didnt waste time to implement this because it is not required to be interactive, but if needed here we would open sidemenu, for example 80% sidemenu, 20% background rgba(0,0,0,0.75), we would also display user icons in that sidemenu that are currently hidden from at this breakpoint.',
  )
}
</script>
