<template>
  <div class="flex w-full flex-col items-center justify-center uppercase">
    <span class="mb-6 px-2.5 text-center text-4xl"> Sorry, page was not found! </span>
    <div class="cursor-pointer px-2.5 text-center hover:text-blue-100" @click="goBack">Click here to go back</div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>
