<script>
  /** @type {{ data: import('./$types').PageData }} */
  import { token } from "$lib/../stores/auth";
  import PokemonCardTable from "$lib/components/pokemons/PokemonCardTable.svelte";
  import PokemonService from "$lib/../services/PokemonService.js";

  export let data;
  const service = new PokemonService();

  let pokemons = data.pokemons.data;
  let totalPokemon = data.pokemons.total;
  let limit = data.pokemons.limit;
  let currentPage = data.page;

  let currentToken = $token;

  $: if ($token !== currentToken) {
    currentToken = $token;
    fetchAllPokemons();
  }

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

  async function fetchAllPokemons() {
    const res = await service.getAll(currentPage?.toString(), "", fetch);
    pokemons = res.data;
  }
</script>

<div class="max-w-4xl mx-auto px-4">
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
