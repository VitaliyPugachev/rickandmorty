<script lang="ts" setup>
defineProps<{title?: string}>();
defineEmits(['onClick'])
</script>


<template>
  <button class="button" @click="$emit('onClick')">
    <span class="button__label">
      {{ title }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 4px 12px;
  background: none;
  border-radius: 4px;

  &.label {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>