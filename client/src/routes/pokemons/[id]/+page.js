import PokemonService from "../../../services/PokemonService.js";

const service = new PokemonService();

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
  const id = params.id;
  console.log("1");
  try {
    const pokemon = await service.getOne(id, fetch);

    console.log("2");
    if (!pokemon) {
      throw new Error("Pokemon not found");
    }

    console.log(pokemon.name);
    return { pokemon };
  } catch (err) {
    return {
      pokemon: null,
      error: err.message || "Unknown Error",
    };
  }
}
