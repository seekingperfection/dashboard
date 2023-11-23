<template>
  <div class="flex flex-col">
    <span v-if="label" class="mb-4">{{ label }}</span>
    <input
      type="text"
      class="w-full pl-[24px] lg:w-[266px]"
      :placeholder="placeholder"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue'
import _ from 'lodash'

interface Props {
  label?: string
  placeholder?: string
  value?: string
  useDebounce?: boolean
}

const emits = defineEmits<{
  (event: 'update:value', value: string): void
}>()

const { label, placeholder, value, useDebounce } = defineProps<Props>()

const inputValue = ref(value)

const debouncedInputHandler = _.debounce((value: string): void => {
  emits('update:value', value)
}, 500)

const handleInput = (event: Event): void => {
  const newValue = (event.target as HTMLInputElement).value

  inputValue.value = newValue

  if (!useDebounce) {
    emits('update:value', newValue)
    return
  }

  debouncedInputHandler(newValue)
}
</script>
