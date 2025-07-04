import PokemonService from "$lib/../services/PokemonService.js";
import { errorHandler } from "$lib/../utils/errorHandler";

const service = new PokemonService();

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }) {
  return await errorHandler(async () => {
    const id = params.id;
    const pokemon = await service.getOne(id, fetch);

    if (!pokemon) {
      throw new Error("Pokemon not found");
    }

    return { pokemon };
  });
}
