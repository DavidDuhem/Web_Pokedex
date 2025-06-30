<script>
  /** @type {{ data: import('./$types').PageData }} */

  export let data;
</script>

<div class="max-w-4xl mx-auto mt-8 px-4">
  <h1 class="text-3xl font-bold text-red-600 mb-4">Liste des Pokémons</h1>
  {#if data.error}
    <p>Erreur : {data.error}</p>
  {:else if !data.pokemons || data.pokemons.length === 0}
    <p>Aucun pokémon trouvé.</p>
  {:else}
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 mb-20"
    >
      {#each data.pokemons as pokemon}
        <a
          href={`/pokemons/${pokemon.id}`}
          class="border rounded p-2 flex flex-col items-center hover:shadow-lg transition cursor-pointer hover:bg-gray-200"
        >
          <span class="text-sm text-gray-500">ID: {pokemon.id}</span>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={pokemon.name}
            class="w-20 h-20 object-contain mb-2"
          />
          <span class="text-red-600 font-semibold">{pokemon.name}</span>
        </a>
      {/each}
    </div>
  {/if}
</div>
