import Card from "./Card.vue";
import {it, expect} from "vitest";
import { mount } from '@vue/test-utils';
import type { CharacterModel } from "~/models/CharacterModel";

const DifferentCards: CharacterModel[] = [
  {
    created: "2017-11-04T18:48:46.250Z",
    episode: ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2"],
    gender: "Male",
    id: 1,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    location: {name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3"},
    name: "Rick Sanchez",
    origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"},
    species: "Human",
    status: "Alive",
    type: "",
    url: "https://rickandmortyapi.com/api/character/1"
  },
  {
    created: "2017-11-04T18:48:46.250Z",
    episode: ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2"],
    gender: "Female",
    id: 2,
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    location: {name: "Earth", url: "https://rickandmortyapi.com/api/location/3"},
    name: "Summer Smith",
    origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"},
    species: "Human",
    status: "Dead",
    type: "type_test",
    url: "https://rickandmortyapi.com/api/character/1"
  }
]

it.only.each(DifferentCards)('Card $name', (item) => {
  const wrapper = mount(Card, {
    slots: {
      default: 'label'
    },
    props: {
      character: item
    }
  });

  if (item.status === 'Alive') {
    expect(wrapper.html()).contains('Alive');
  } else {
    expect(wrapper.html()).not.contains('Alive');
  }

  expect(wrapper.html()).contains(item.name);
  expect(wrapper.html()).contains(item.gender);
  expect(wrapper.html()).contains(item.location.name);
  expect(wrapper.html()).toMatchSnapshot();
});
