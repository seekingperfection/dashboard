<template>
  <div class="flex justify-end gap-x-[20px]">
    <div class="relative flex h-[52px] w-[52px] items-center justify-center rounded bg-white">
      <img src="@/assets/icons/notifications.svg" alt="notifications" class="cursor-pointer" @click="handleIconClick" />
      <span class="absolute right-[-4px] top-[-4px] h-[10px] w-[10px] rounded-full bg-yellow-100" />
    </div>
    <img
      class="flex h-[52px] w-[52px] cursor-pointer rounded-lg"
      src="@/assets/icons/avatar.svg"
      alt="avatar"
      @click="handleIconClick"
    />
  </div>
</template>

<script setup lang="ts">
const handleIconClick = () => {
  alert('Functionality is not described in task.')
}
</script>
