<template>
  <div class="relative flex h-max">
    <input
      type="text"
      class="flex w-full max-w-[655px] pl-[60px]"
      placeholder="Search"
      @click="handleSearchInputClick"
    />
    <img
      src="@/assets/icons/search.svg"
      alt="search"
      class="relative-0 absolute left-[22px] top-[16px] h-[19px] w-[19px]"
    />
  </div>
</template>

<script setup lang="ts">
const handleSearchInputClick = () => {
  alert('Functionality is not described in task.')
}
</script>
