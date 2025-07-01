<script>
  /** @type {{ pokemon: any }} */
  export let data;
  const pokemon = data.pokemon;
</script>

<div class="max-w-4xl mx-auto mt-25 px-4">
  <h1 class="text-3xl font-bold text-red-600 mb-4">Détails du Pokémon</h1>

  {#if !pokemon}
    <p class="text-red-600 mt-10 text-center text-lg">Aucun Pokémon trouvé.</p>
  {:else}
    <div
      class="max-w-4xl mx-auto mt-15 p-6 bg-white rounded-xl shadow-md border border-red-200"
    >
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
          class="w-40 h-40 object-contain rounded-lg border-2 border-red-500"
        />

        <div class="flex-1">
          <h2 class="text-3xl font-bold text-red-600 capitalize mb-4">
            {pokemon.name}
            <span class="text-black font-bold">#{pokemon.id}</span>
          </h2>

          <div class="flex flex-wrap gap-2 mb-6">
            {#each pokemon.types as type}
              <a href={`/types/${type.id}?from=/pokemons/${pokemon.id}`}>
                <span
                  style="background-color: #{type.color}"
                  class="text-black rounded-full px-4 py-1 text-sm font-semibold capitalize select-none"
                >
                  {type.name}
                </span>
              </a>
            {/each}
          </div>

          <h3 class="text-xl font-semibold mb-3 text-red-600">Stats</h3>
          <ul class="grid grid-cols-2 gap-4 text-gray-700 max-w-sm">
            <li><span class="font-semibold">HP :</span> {pokemon.hp}</li>
            <li><span class="font-semibold">ATK :</span> {pokemon.atk}</li>
            <li><span class="font-semibold">DEF :</span> {pokemon.def}</li>
            <li>
              <span class="font-semibold">ATK SPE :</span>
              {pokemon.atk_spe}
            </li>
            <li>
              <span class="font-semibold">DEF SPE :</span>
              {pokemon.def_spe}
            </li>
            <li><span class="font-semibold">SPEED :</span> {pokemon.speed}</li>
          </ul>
        </div>
      </div>
    </div>
  {/if}
</div>
