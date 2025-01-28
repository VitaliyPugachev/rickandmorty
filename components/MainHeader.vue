<script lang="ts" setup>
interface MenuLink {
    label: string,
    to: string
}

const menu: MenuLink[] = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'Characters',
        to: '/characters'
    },
    {
        label: 'Locations',
        to: '/locations'
    },
    {
        label: 'Episodes',
        to: '/episodes'
    }
]

</script>

<template>
  <section class="header">
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
    box-shadow: 2px 0px 4px 0px grey;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__list {
        list-style: none;
        display: flex;
        gap: 20px;
    }

    &__list-item {
        outline: none;
    }
}
</style>