<script lang="ts" setup>
import type { CharacterModel } from '~/models/CharacterModel';

const route = useRoute();
const character = ref<CharacterModel | null>(null);
const loading = ref(false);

const {showNotificaton} = useNotification();

const getCharacterById = async (id: string) => {
  try {
    loading.value = true;
    const response = await useFetch<CharacterModel>(`https://rickandmortyapi.com/api/character/${id}`);

    const {data} = response;

    if (data.value) {
      character.value = response.data.value;
    }
  } catch(e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

const copyLink = () => {
  try {
    navigator.clipboard.writeText(`${window.location.href}`);
    showNotificaton('Ссылка скопирована');
  } catch(e) {
    showNotificaton('Не удалось скопировать ссылку')
  }
}

await getCharacterById(route.params?.id.toString());

const breadcrumbs = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Characters',
  icon: 'i-hugeicons:user-multiple-02',
  to: '/characters'
}, {
  label: character.value?.name || 'personal',
  icon: 'i-heroicons-link'
}]

useHead({
  title: character.value?.name || 'Character'
})
</script>

<template>
  <main class="character">
    <UBreadcrumb :links="breadcrumbs"/>
    <div class="character__buttons">
      <UButton icon="i-hugeicons:arrow-turn-backward" label="Back to characters" @click="$router.push('/characters')"/>
      <UButton icon="i-hugeicons:copy-01" label="Copy link" @click="copyLink"/>
    </div>
    <UCard>
      <template #header>
        {{ character?.name }}
      </template>
  
      <img :src="character?.image">
  
      <template #footer>
        <UBadge v-if="character?.gender">
          {{ character?.gender }}
        </UBadge>

        <UBadge v-if="character?.species">
          {{ character?.species }}
        </UBadge>

        <UBadge v-if="character?.origin.name">
          {{ character?.origin.name }}
        </UBadge>

        <UBadge v-if="character?.type">
          {{ character?.type }}
        </UBadge>

        <UBadge v-if="character?.status">
          {{ character?.status }}
        </UBadge>
      </template>
    </UCard>
  </main>
</template>

<style lang="scss" scoped>
.character {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
