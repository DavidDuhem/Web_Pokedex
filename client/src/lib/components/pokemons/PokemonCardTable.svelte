<script>
  import PokemonCard from "$lib/components/pokemons/PokemonCard.svelte";

  export let pokemons;
  export let totalPokemon;
  export let limit;
  export let fromUrl = "";

  let currentPage = 1;

  const nbPages = Array.from(
    { length: Math.ceil(totalPokemon / limit) },
    (_, i) => i + 1
  );
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 mb-5"
>
  {#each pokemons as pokemon}
    <PokemonCard {pokemon} {fromUrl} />
  {/each}
</div>

<div class="flex justify-center mb-20">
  {#each nbPages as page}
    <a
      href={`?page=${page}`}
      rel="external"
      class="text-blue-600 hover:underline px-1"
    >
      {page}
    </a>
    {#if page < nbPages.length - 1}
      <span>&nbsp;</span>
    {/if}
  {/each}
</div>
