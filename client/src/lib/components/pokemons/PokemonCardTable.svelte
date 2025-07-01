<script>
  import PokemonCard from "$lib/components/pokemons/PokemonCard.svelte";

  export let pokemons;
  export let fromUrl = "";
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 mb-20"
>
  {#each pokemons as pokemon}
    <PokemonCard {pokemon} {fromUrl} />
  {/each}
</div>
