import BaseService from "./BaseService";
import { token } from "../stores/auth.js";
import { get } from "svelte/store";

export default class PokemonService extends BaseService {
  constructor(baseUrl) {
    super(baseUrl, "pokemons");
  }

  async manageVotes(id, alreadyVoted, fetchFn = fetch) {
    const userToken = get(token);
    let res;

    if (!alreadyVoted) {
      res = await fetchFn(`${this.baseUrl}/${this.endpoint}/${id}/votes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("Vote added");
    } else {
      res = await fetchFn(`${this.baseUrl}/${this.endpoint}/${id}/votes`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      console.log("Vote removed");
    }

    return res.json();
  }
}
