import PokemonService from "$lib/../services/PokemonService.js";
import { errorHandler } from "$lib/../utils/errorHandler";

const service = new PokemonService();

/** @type {import('./$types').PageLoad} */

export async function load({ url, fetch }) {
  return await errorHandler(async () => {
    const page = parseInt(url.searchParams.get("page")) || 1;

    const pokemons = await service.getAll(page, "", fetch);

    return { pokemons, page };
  });
}
