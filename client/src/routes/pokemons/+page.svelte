<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();

  import { onMount } from "svelte";
  import {
    pokemons,
    pokemonLoading,
    pokemonError,
    loadPokemons,
  } from "../../stores/PokemonStore.js";

  onMount(() => {
    loadPokemons();
  });
</script>

{#if $pokemonLoading}
  <p>Chargement...</p>
{:else if $pokemonError}
  <p>Erreur : {$pokemonError}</p>
{:else}
  <ul>
    {#each $pokemons as pokemon}
      <li>{pokemon.name}</li>
    {/each}
  </ul>
{/if}
