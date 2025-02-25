<script>
useHead({
  title: 'Rick and Morty'
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NotificationComponent/>
  </div>
</template>

<style>
@import '~/assets/style.scss';
</style>
