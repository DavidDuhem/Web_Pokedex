<script>
  import { onMount } from 'svelte';
import { pokemons, pokemonLoading, pokemonError, loadPokemons } from "../stores/PokemonStore.js";
import { types, typeLoading, typeError, loadTypes } from "../stores/TypeStore.js";
import { teams, teamLoading, teamError, loadTeams } from "../stores/TeamStore.js";

  onMount(() =>{
    loadTeams();
  })
</script>


{#if $teamLoading}
  <p>Chargement...</p>
{:else if $teamError}
  <p>Erreur : {$teamError}</p>
{:else}
  <ul>
    {#each $teams as team}
      <li>{team.name}</li>
    {/each}
  </ul>
{/if}