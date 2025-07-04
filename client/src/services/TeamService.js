import BaseService from "./BaseService";
import { token } from "../stores/auth.js";
import { get } from "svelte/store";
import { errorHandler } from "$lib/../utils/errorHandler";

export default class TeamService extends BaseService {
  constructor(baseUrl) {
    super(baseUrl, "teams");
  }

  async getTeamAndPokemons(id, fetchFn = fetch) {
    return await errorHandler(async () => {
      const res = await fetchFn(
        `${this.baseUrl}/${this.endpoint}/${id}/pokemons`
      );

      if (!res.ok) {
        throw new Error(`Error fetching ${this.endpoint}/${id}/pokemons`);
      }

      return res.json();
    }, "Fetch failed");
  }

  async addTeamPokemon(teamId, data, fetchFn = fetch) {
    return await errorHandler(async () => {
      const res = await fetchFn(
        `${this.baseUrl}/${this.endpoint}/${teamId}/pokemons`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${get(token)}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(
          err.error ||
            `Error while fetching ${this.baseUrl}/${this.endpoint}/${teamId}/pokemons`
        );
      }
      return res.json();
    }, "Post failed");
  }

  async deleteTeamPokemon(teamId, pokemonId, fetchFn = fetch) {
    return await errorHandler(async () => {
      const res = await fetchFn(
        `${this.baseUrl}/${this.endpoint}/${teamId}/pokemons/${pokemonId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${get(token)}`,
          },
        }
      );
      if (!res.ok)
        throw new Error(
          `Error fetching ${this.endpoint}/${teamId}/pokemons/${pokemonId}`
        );
      return res.json();
    }, "Delete failed");
  }
}
