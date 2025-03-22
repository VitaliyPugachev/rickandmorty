<script lang="ts" setup>
import ListPagination from '~/components/ListPagination.vue';
import type { CharacterModel } from '~/models/CharacterModel';
import type { InfoModel, ResponseListModel } from '~/models/ResponseModel';

const charactersList = ref<CharacterModel[]>([]);
const listLoading = ref(false);
const pagination = ref<InfoModel>();
const page = ref<number>(1);

const getCharacterList = async (page?: number) => {
  try {
    listLoading.value = true;
    const response = await useFetch<ResponseListModel<CharacterModel>>(
      'https://rickandmortyapi.com/api/character',
      {query: {
        page: page || 1
      }}
    );
    const {data} = response;

    if (data) {
      charactersList.value = data.value?.results || []
      pagination.value = data.value?.info
    }
  } catch(e) {
    console.log(e);
  } finally {
    listLoading.value = false;
  }
}

getCharacterList(1);

useHead({
  title: 'Characters'
})

</script>

<template>
  <section class="characters">
    <h2 class="characters__title">List of characters</h2>
    <div v-if="listLoading" class="loader">
      LOADING
    </div>
    <div v-else class="characters__list">
      <template v-for="character in charactersList" :key="character.id">
        <CharactersCard :character/>
      </template>
    </div>
    <ListPagination
      :current-page="page"
      :pages="pagination?.pages || 0"
      @on-request="getCharacterList"
    />
  </section>
</template>

<style lang="scss">
.characters {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
