<script>
  /** @type {{ data: import('./$types').PageData }} */
  import PokemonCardTable from "$lib/components/pokemons/PokemonCardTable.svelte";
  import PokemonService from "$lib/../services/PokemonService.js";

  export let data;
  const service = new PokemonService();

  const pokemons = data.pokemons.data;
  const totalPokemon = data.pokemons.total;
  const limit = data.pokemons.limit;
  const currentPage = data.page;

  async function onLikeClicked(pokemonId, alreadyVoted) {
    try {
      await service.manageVotes(pokemonId, alreadyVoted, fetch);
    } catch (err) {
      return { pokemons: [], error: err.message || "Unknown Error" };
    }
  }
</script>

<div class="max-w-4xl mx-auto mt-8 px-4">
  <h1 class="text-3xl font-bold text-red-600 mb-4">Liste des Pokémons</h1>
  {#if data.error}
    <p>Erreur : {data.error}</p>
  {:else if !pokemons || pokemons.length === 0}
    <p>Aucun pokémon trouvé.</p>
  {:else}
    <PokemonCardTable
      {pokemons}
      {totalPokemon}
      {limit}
      {currentPage}
      {onLikeClicked}
    />
  {/if}
</div>
