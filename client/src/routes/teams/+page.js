import TeamService from "$lib/../services/TeamService.js";
import { errorHandler } from "$lib/../utils/errorHandler";

const service = new TeamService();

/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  return await errorHandler(async () => {
    const teams = await service.getAll("", "", fetch);
    return { teams };
  });
}
