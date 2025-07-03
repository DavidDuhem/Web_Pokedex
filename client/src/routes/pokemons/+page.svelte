<script>
  /** @type {{ data: import('./$types').PageData }} */
  import PokemonCardTable from "$lib/components/pokemons/PokemonCardTable.svelte";
  import PokemonService from "$lib/../services/PokemonService.js";

  export let data;
  const service = new PokemonService();

  let pokemons = data.pokemons.data;
  const totalPokemon = data.pokemons.total;
  const limit = data.pokemons.limit;
  const currentPage = data.page;

  async function onLikeClicked(pokemon, alreadyVoted) {
    try {
      const res = await service.manageVotes(pokemon.id, alreadyVoted, fetch);

      if (res) {
        const index = pokemons.findIndex((p) => p.id === pokemon.id);
        if (index !== -1) {
          const pokemon = { ...pokemons[index] };
          pokemon.hasVoted = !alreadyVoted;
          const newVotesCount =
            parseInt(pokemon.votesCount) + (alreadyVoted ? -1 : 1);
          pokemon.votesCount = newVotesCount;
          pokemons[index] = pokemon;
          pokemons = [...pokemons];
        }
      }
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
