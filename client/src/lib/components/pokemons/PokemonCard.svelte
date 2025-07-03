<script>
  import { isLoggedIn, token } from "$lib/../stores/auth.js";

  export let pokemon;
  export let fromUrl = "";
  export let onLikeClicked;
</script>

<div class="relative">
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
    <span>{pokemon.votesCount} likes</span>
  </a>

  {#if $isLoggedIn}
    <button
      type="button"
      class="absolute top-0 right-0 p-1 transition"
      aria-label="Like this Pokémon"
      on:click|stopPropagation={() => onLikeClicked(pokemon, pokemon.hasVoted)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 transition-colors duration-200
    {pokemon.hasVoted
          ? 'text-red-500 hover:text-gray-400'
          : 'text-gray-400 hover:text-red-500'}"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
         2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09
         C13.09 3.81 14.76 3 16.5 3
         19.58 3 22 5.42 22 8.5
         c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>
  {/if}
</div>
