<script>
  import { onDestroy } from "svelte";
  import Popup from "./Popup.svelte";
  import PokemonService from "$lib/../services/PokemonService.js";
  import { errorHandler } from "$lib/../utils/errorHandler";

  const service = new PokemonService();

  export let showPopup;
  export let onClose;
  export let onValidate;
  export let pokemons = [];
  export let onPokemonListUpdated;

  let search = "";
  let pokemonToAddId = null;

  let debounceTimeout;

  async function loadPokemons() {
    return await errorHandler(async () => {
      const data = await service.getAll("", search);
      pokemons = data.data;
      onPokemonListUpdated(pokemons);
      console.log(pokemons);
    });
  }

  $: if (search !== undefined) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      loadPokemons();
    }, 300);
  }

  onDestroy(() => {
    clearTimeout(debounceTimeout);
  });

  function tryValidate(pokemonToAddId) {
    if (pokemonToAddId != null) {
      onValidate(pokemonToAddId);
    }
  }

  function onSelect(id) {
    pokemonToAddId = id;
  }
</script>

{#if showPopup}
  <Popup title="Sélectionner un Pokémon" {onClose}>
    <div class="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Rechercher par nom ou ID"
        bind:value={search}
        class="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {#if pokemons.length > 0}
        <ul class="max-h-128 overflow-y-auto border rounded mt-2">
          {#each pokemons as pokemon}
            <li>
              <button
                type="button"
                class={`flex items-center gap-3 p-2 w-full text-left rounded hover:bg-gray-100 cursor-pointer ${pokemon.id === pokemonToAddId ? "bg-gray-200" : ""}`}
                on:click={() => onSelect(pokemon.id)}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  alt={pokemon.name}
                  class="w-12 h-12 rounded object-cover"
                />
                <div class="flex flex-col">
                  <span class="font-bold">{pokemon.name}</span>
                  <span class="text-sm text-gray-500 italic"
                    >ID: {pokemon.id}</span
                  >
                </div>
              </button>
            </li>
          {/each}
        </ul>
      {:else if search.length > 0}
        <p class="mt-2 text-gray-500 italic">Aucun Pokémon trouvé.</p>
      {/if}
    </div>
    <button
      class="bg-green-600 text-white px-4 py-2 mt-5 rounded hover:bg-green-700 transition"
      on:click={() => tryValidate(pokemonToAddId)}
    >
      Valider
    </button>
  </Popup>
{/if}
