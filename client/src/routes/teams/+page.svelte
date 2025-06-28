<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();

  import { onMount } from "svelte";
  import {
    teams,
    teamLoading,
    teamError,
    loadTeams,
  } from "../../stores/TeamStore.js";

  onMount(() => {
    loadTeams();
  });
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
