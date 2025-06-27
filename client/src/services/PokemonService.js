import BaseService from "./BaseService";

export default class PokemonService extends BaseService {
  constructor(baseUrl) {
    super(baseUrl, "pokemons");
  }
}
