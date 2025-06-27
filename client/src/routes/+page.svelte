<script>
  import { onMount } from 'svelte';
  import { pokemons, loading, error, loadPokemons } from '../stores/pokemonStore.js';

  onMount(() =>{
    loadPokemons();
  })
</script>


{#if $loading}
  <p>Chargement...</p>
{:else if $error}
  <p>Erreur : {$error}</p>
{:else}
  <ul>
    {#each $pokemons as pokemon}
      <li>{pokemon.name}</li>
    {/each}
  </ul>
{/if}