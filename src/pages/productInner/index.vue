<template>
  <div class="flex h-max w-full flex-col px-3 py-6 uppercase lg:px-8 lg:py-8">
    <div class="mb-8 flex h-max w-full flex-col lg:flex-row">
      <span class="text-left text-4xl"> Product inner </span>
    </div>
    <Loading v-if="store.getters.loading" class="!m-0 !p-0" />
    <div v-else class="flex w-full flex-col">
      <span class="mb-4"> Product info: </span>
      <pre class="overflow-hidden text-ellipsis whitespace-pre-line rounded border border-dark-100/[.25] p-3 lg:p-6">
        {{ getAndDisplayProductData }}
      </pre>
    </div>
    <router-link to="/dashboard" class="px-0 text-center lg:text-left"> To dashboard </router-link>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Loading from '@/components/elements/loading/index.vue'

const store = useStore()
const route = useRoute()

onMounted(async () => {
  await store.dispatch('fetchProductById', route.params.id)
})

const getAndDisplayProductData = computed(() => {
  const product = store.getters.product

  if (!product) {
    return null
  }

  return Object.entries(product)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        const arrayInfo = value.map((item) => `- ${item}`).join('\n')

        return `${key}:\n${arrayInfo}`
      } else {
        return `${key}: ${value}`
      }
    })
    .join('\n')
})
</script>
