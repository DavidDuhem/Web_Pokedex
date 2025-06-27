import { writable } from "svelte/store";
import PokemonService from "../services/PokemonService.js";

const service = new PokemonService();

export const pokemons = writable([]);
export const loading = writable(false);
export const error = writable(null);

export async function loadPokemons() {
  loading.set(true);
  error.set(null);
  try {
    const data = await service.getAll();
    pokemons.set(data);
  } catch (err) {
    error.set(err.message);
  } finally {
    loading.set(false);
  }
}
