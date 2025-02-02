<script lang="ts" setup>
import type { CharacterModel } from '~/models/CharacterModel';

const route = useRoute();
const character = ref<CharacterModel | null>(null);
const loading = ref(false);
const data = ref<any>();

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
}

await getCharacterById(route.params?.id.toString());

useHead({
    title: character.value?.name || 'Character'
})


</script>

<template>
  <main class="character">
    <button class="character__back-button" @click="$router.go(-1)">
        Вернуться назад
    </button>
    <section class="character__info">
        <div class="character__image-wrapper">
            <img :src="character?.image"/>
        </div>
        <div class="character__description">
            <div class="character__row">
                <span class="character__label">
                    Name
                </span>
                <span class="character__value">
                    {{ character?.name }}
                </span>
            </div>

            <div class="character__row">
                <span class="character__label">
                    Gender
                </span>
                <span class="character__value">
                    {{ character?.gender }}
                </span>
            </div>

            <div class="character__row">
                <span class="character__label">
                    Type
                </span>
                <span class="character__value">
                    {{ character?.type }}
                </span>
            </div>
        </div>
    </section>
    {{ character }}
  </main>
</template>

<style>

</style>