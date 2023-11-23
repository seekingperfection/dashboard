<template>
  <div class="flex w-max">
    <img
      src="@/assets/icons/checkbox.svg"
      alt="checkbox"
      class="h-[22px] w-[22px] cursor-pointer"
      @click="handleCheckBoxClick"
    />
  </div>
</template>

<script setup lang="ts">
const handleCheckBoxClick = () => {
  alert('There is no active state displayed on figma and task does not require any actions to be made here.')
}
</script>
