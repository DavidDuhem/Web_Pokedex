import TypeService from "$lib/../services/TypeService.js";

const service = new TypeService();

/** @type {import('./$types').PageLoad} */

export async function load({ fetch }) {
  try {
    const types = await service.getAll(fetch);
    return { types };
  } catch (err) {
    return { types: [], error: err.message || "Erreur inconnue" };
  }
}
