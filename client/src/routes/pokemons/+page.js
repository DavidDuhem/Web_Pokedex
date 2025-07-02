import PokemonService from "$lib/../services/PokemonService.js";

const service = new PokemonService();

/** @type {import('./$types').PageLoad} */

export async function load({ url, fetch }) {
  try {
    const page = parseInt(url.searchParams.get("page")) || 1;

    const pokemons = await service.getAll(page, fetch);

    return { pokemons };
  } catch (err) {
    return { pokemons: [], error: err.message || "Erreur inconnue" };
  }
}
