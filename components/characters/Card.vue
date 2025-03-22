<script lang="ts" setup>
import type { CharacterModel } from '~/models/CharacterModel';

defineProps<{character: CharacterModel}>();

</script>

<template>
  <UCard class="character-card" @click="$router.push(`/characters/${character.id}`)">

    <template #header>
        <section class="character-card__image-wrapper">
            <img class="character-card__image" :src="character.image" :alt="character.name">
        </section>
    </template>

    <header class="character-card__header">
        <UBadge color="blue" :label="character.name"/>
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
  </UCard>
</template>

<style lang="scss">
.character-card {
    cursor: pointer;

    &__header {
        display: flex;
        justify-content: center;
    }
}
</style>