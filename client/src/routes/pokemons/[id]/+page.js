import PokemonService from "../../../services/PokemonService.js";

const service = new PokemonService();

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const id = params.id;
  try {
    const pokemon = await service.getOne(id, fetch);

    if (!pokemon) {
      throw new Error("Pokemon not found");
    }

    return { pokemon };
  } catch (err) {
    return {
      pokemon: null,
      error: err.message || "Unknown Error",
    };
  }
}
