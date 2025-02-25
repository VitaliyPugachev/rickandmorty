<script lang="ts" setup>
import { useNotification } from '~/stores/notificationStore';

const {closeNotification} = useNotification();
const {isOpen, text, title} = storeToRefs(useNotification());
</script>

<template>
  <dialog :open="isOpen" class="notification">
    <div class="notification__content">
      <div class="notification__text-wrapper">
        <h5 v-if="title" class="notification__title">{{title}}</h5>
        <p class="notification__message">{{text}}</p>
      </div>
      <UButton icon="i-hugeicons:cancel-01" color="white" @click="closeNotification"/>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.notification {
  position: fixed;
  bottom: 40px;
  right: 40px;
  left: auto;

  &__content {
    padding: 8px 16px;
    border-radius: 16px;
    border: 1px solid #e3e3e3;
    box-shadow: 0 0 20px 0 #e3e3e3;
    display: flex;
    gap: 20px;
    align-items: center;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  &__message {
    font-size: 14px;
    margin: 0;
  }
}
</style>