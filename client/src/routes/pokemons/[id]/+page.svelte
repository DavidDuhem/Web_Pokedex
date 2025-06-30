<script>
  /** @type {{ pokemon: any }} */
  export let data;
  const pokemon = data.pokemon;
</script>

<div class="max-w-4xl mx-auto p-6">
  <h1 class="text-3xl font-bold mb-4 capitalize">
    {pokemon.name} (#{pokemon.id})
  </h1>

  <img
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
    alt={pokemon.name}
    class="w-64 h-64 mx-auto mb-6"
  />

  <div class="flex flex-wrap gap-2 justify-center mb-6">
    {#each pokemon.types as type}
      <span class="bg-gray-200 rounded-full px-3 py-1 text-sm capitalize">
        {type.type.name}
      </span>
    {/each}
  </div>

  <h2 class="text-xl font-semibold mb-2">Stats</h2>
  <ul class="mb-6">
    <li>
      <span class="capitalize">HP : </span>
      {pokemon.hp}
    </li>
    <li>
      <span class="capitalize">ATK : </span>
      {pokemon.atk}
    </li>
    <li>
      <span class="capitalize">DEF : </span>
      {pokemon.def}
    </li>
    <li>
      <span class="capitalize">ATK_SPE : </span>
      {pokemon.atk_spe}
    </li>
    <li>
      <span class="capitalize">DEF_SPE : </span>
      {pokemon.def_spe}
    </li>
    <li>
      <span class="capitalize">SPEED : </span>
      {pokemon.speed}
    </li>
  </ul>
</div>
