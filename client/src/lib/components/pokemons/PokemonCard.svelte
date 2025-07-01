<script>
  export let pokemon;
  export let fromUrl = "";
</script>

<a
  href={`/pokemons/${pokemon.id}${fromUrl !== "" ? "?from=" + fromUrl : ""}`}
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
