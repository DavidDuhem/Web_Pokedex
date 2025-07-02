import TeamService from "$lib/../services/TeamService.js";
import PokemonService from "$lib/../services/PokemonService.js";

const teamService = new TeamService();
const pokemonService = new PokemonService();

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch, url }) {
  try {
    const search = url.searchParams.get("search") || "";

    const team = await teamService.getTeamAndPokemons(params.id, fetch);
    const allPokemons = await pokemonService.getAll(search);

    return { team, allPokemons };
  } catch (err) {
    return { team: null, error: err.message || "Erreur inconnue" };
  }
}
