<script lang="ts" setup>

import HomeIcon from 'assets/icons/home.svg';
import CharacterIcon from 'assets/icons/people.svg';
import LocationIcon from 'assets/icons/location.svg';
import EpisodeIcon from 'assets/icons/theaters.svg';

interface MenuLink {
  label: string,
  to: string,
  icon: string,
}

const menu: MenuLink[] = [
  {
    label: 'Home',
    to: '/',
    icon: HomeIcon
  },
  {
    label: 'Characters',
    to: '/characters',
    icon: CharacterIcon
  },
  {
    label: 'Locations',
    to: '/locations',
    icon: LocationIcon
  },
  {
    label: 'Episodes',
    to: '/episodes',
    icon: EpisodeIcon
  }
]

</script>

<template>
  <section class="header">
    <ul class="header__list">
      <template v-for="item in menu" :key="item.to">
        <li class="header__list-item">
          <NuxtLink class="header__link" :to="item.to">
            <Component class="header__icon" :is="item.icon"/>
            {{item.label}}
          </NuxtLink>
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

  &__link {
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      opacity: 0.8;
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
    fill: #131313;
  }
}
</style>
