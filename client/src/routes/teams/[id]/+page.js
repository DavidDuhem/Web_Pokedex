import TeamService from "../../../services/TeamService.js";
import PokemonService from "../../../services/PokemonService.js";

const teamService = new TeamService();
const pokemonService = new PokemonService();

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }) {
  try {
    const team = await teamService.getTeamAndPokemons(params.id, fetch);
    const allPokemons = await pokemonService.getAll(fetch);
    return { team, allPokemons };
  } catch (err) {
    return { team: null, error: err.message || "Erreur inconnue" };
  }
}
