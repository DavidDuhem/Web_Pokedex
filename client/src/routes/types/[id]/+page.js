/** @type {import('./$types').PageLoad} */

import TypeService from "$lib/../services/TypeService.js";

const service = new TypeService();

export async function load({ params, fetch }) {
  const id = params.id;
  try {
    const type = await service.getOne(id, fetch);

    if (!type) {
      throw new Error("Type not found");
    }

    return { type };
  } catch (err) {
    return { type: null, error: err.message || "Erreur inconnue" };
  }
}
