import PokemonService from "$lib/../services/PokemonService.js";

const service = new PokemonService();

/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  try {
    const pokemons = await service.getAll(fetch);
    return { pokemons };
  } catch (err) {
    return { pokemons: [], error: err.message || "Erreur inconnue" };
  }
}
