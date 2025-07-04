/** @type {import('./$types').PageLoad} */

import TypeService from "$lib/../services/TypeService.js";
import { errorHandler } from "$lib/../utils/errorHandler";

const service = new TypeService();

export async function load({ params, fetch }) {
  return await errorHandler(async () => {
    const id = params.id;
    const type = await service.getOne(id, fetch);

    if (!type) {
      throw new Error("Type not found");
    }

    return { type };
  });
}
