<script lang="ts" setup>
defineProps<{pages: number}>();
const emits = defineEmits(['onRequest']);
const currentPage = defineModel<number>();

const onChangePage = (newPage: number) => {
  currentPage.value = newPage;

  emits('onRequest', currentPage.value);
}

</script>

<template>
  <section class="pagination">
    <template v-for="page in getPaginationPages(pages, currentPage || 1)">
      <div 
        class="pagination__page" 
        :class="{active: page === currentPage}"
        @click="onChangePage(Number(page))"
      >
        {{ page }}
      </div>
    </template>
  </section>
</template>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;

  &__page {
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e1e1e1;

    &:hover {
      background: #f0f0f0;
    }

    &.active {
      background: #FFFFFF;
    }
  }
}
</style>