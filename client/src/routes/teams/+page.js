import TeamService from "$lib/../services/TeamService.js";

const service = new TeamService();

/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  try {
    const teams = await service.getAll("", "", fetch);
    return { teams };
  } catch (err) {
    return { teams: [], error: err.message || "Erreur inconnue" };
  }
}
