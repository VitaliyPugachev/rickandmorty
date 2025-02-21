<script lang="ts" setup>

import HomeIcon from 'assets/icons/home.svg';

interface MenuLink {
  label: string,
  to: string
}

const menu: MenuLink[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Characters',
    to: '/characters',

  },
  {
    label: 'Locations',
    to: '/locations',

  },
  {
    label: 'Episodes',
    to: '/episodes',

  }
]

</script>

<template>
  <section class="header">
      <Component class="svg" :is="HomeIcon"/>
    <ul class="header__list">
      <template v-for="item in menu" :key="item.to">
        <li class="header__list-item">
          <NuxtLink class="header__link" :to="item.to">{{item.label}}</NuxtLink>
        </li>
      </template>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  position: sticky;
  top: 0;
  height: 60px;
  background: #FFFFFF;
  box-shadow: 2px 0 4px 0 grey;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &__list {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  &__list-item {
    outline: none;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: none;
  }
}

.svg {
  width: 20px;
  height: 20px;
  fill: red;
}
</style>
