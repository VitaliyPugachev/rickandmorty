<script lang="ts">
import { UNotification } from '#components';


useHead({
  title: 'Rick and Morty'
})

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotification/>
  </div>
</template>

<style>
@import '~/assets/style.scss';
</style>
