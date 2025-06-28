import TeamService from "../../../services/TeamService.js";

const service = new TeamService();

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }) {
  try {
    const team = await service.getOne(params.id, fetch);
    return { team };
  } catch (err) {
    return { team: null, error: err.message || "Erreur inconnue" };
  }
}
