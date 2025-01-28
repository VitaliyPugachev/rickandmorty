<script lang="ts" setup>
import type { CharacterModel } from '~/models/CharacterModel';

defineProps<{character: CharacterModel}>();

</script>

<template>
  <article class="character-card">

    <section class="character-card__image-wrapper">
        <img class="character-card__image" :src="character.image" :alt="character.name"/>
    </section>

    <header class="character-card__header">
        <h4 class="character-card__name">{{character.name}}</h4>
    </header>

    <section class="character-card__info">
        <div class="character-card__info-row">
            <span class="character-card__label">
                Gender:
            </span>
            <span class="character-card__value">
                {{ character.gender }}
            </span>
        </div>

        <div class="character-card__info-row">
            <span class="character-card__label">
                Type:
            </span>
            <span class="character-card__value">
                {{ character.type.length > 25 ? `${character.type.substring(0, 25)}...`: character.type }}
            </span>
        </div>

        <div class="character-card__info-row">
            <span class="character-card__label">
                Location:
            </span>
            <span class="character-card__value">
                {{ 
                    character.location.name.length > 25 
                    ? `${character.location.name.substring(0, 25)}...`
                    : character.location.name 
                }}
            </span>
        </div>

        <div class="character-card__info-row">
            <span class="character-card__label">
                Status:
            </span>
            <span class="character-card__value">
                {{ character.status }}
            </span>
        </div>
    </section>
  </article>
</template>

<style lang="scss">

.character-card {
    border: 1px solid black;
    padding: 12px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;

    &__info {
        align-self: flex-start;
    }

    &__image-wrapper {
        width: 274px;
        height: 274px;
        overflow: hidden;
        border-radius: 4px;
        margin: -12px;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__info {
        font-size: 14px;
    }

    &__label {
        font-weight: 600;
    }

    &__info-row {
        display: flex;
        align-items: center;
        gap: 8px;
    }
}

</style>