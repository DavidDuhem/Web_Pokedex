import TypeService from "$lib/../services/TypeService.js";
import { errorHandler } from "$lib/../utils/errorHandler";

const service = new TypeService();

/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  return await errorHandler(async () => {
    const types = await service.getAll("", "", fetch);
    return { types };
  });
}
