<script>
  import PokemonCard from "$lib/components/pokemons/PokemonCard.svelte";

  export let pokemons;
  export let totalPokemon;
  export let limit;
  export let currentPage = 1;
  export let fromUrl = "";
  export let onLikeClicked;

  const nbPages = Array.from(
    { length: Math.ceil(totalPokemon / limit) },
    (_, i) => i + 1
  );

  const hasNextPage = currentPage < nbPages.length;
  const hasPreviousPage = currentPage > 1;
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 mb-10"
>
  {#each pokemons as pokemon}
    <PokemonCard {pokemon} {fromUrl} {onLikeClicked} />
  {/each}
</div>

<div class="flex justify-center mb-20">
  {#if hasPreviousPage}
    <span>
      <a
        href={`?page=${currentPage - 1}`}
        rel="external"
        class="text-red-600 hover:underline px-2 font-bold"
      >
        Précécent
      </a>
    </span>
  {/if}
  <span class="mr-3 ml-3">
    {#each nbPages as page}
      <a
        href={`?page=${page}`}
        rel="external"
        class="text-red-600 hover:underline px-1 {page === currentPage
          ? 'font-bold underline'
          : ''}"
      >
        {page}
      </a>
      {#if page < nbPages.length - 1}
        <span>&nbsp;</span>
      {/if}
    {/each}
  </span>
  <span>
    {#if hasNextPage}
      <a
        href={`?page=${currentPage + 1}`}
        rel="external"
        class="text-red-600 hover:underline px-2 font-bold"
      >
        Suivant
      </a>
    {/if}
  </span>
</div>
