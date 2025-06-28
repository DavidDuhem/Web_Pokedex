import BaseServiceStore from "./BaseServiceStore.js";
import PokemonService from "../services/PokemonService.js";

const service = new PokemonService();

class PokemonStore extends BaseServiceStore {
  constructor() {
    super(service);
  }
}

export const pokemonStore = new PokemonStore();
export const pokemons = pokemonStore.items;
export const pokemonLoading = pokemonStore.loading;
export const pokemonError = pokemonStore.error;
export const loadPokemons = () => pokemonStore.loadAll();
