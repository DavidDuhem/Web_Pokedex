<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

{#if data.error}
  <p>Erreur : {data.error}</p>
{:else if !data.teams || data.teams.length === 0}
  <p>Aucune équipe trouvée.</p>
{:else}
  <ul>
    {#each data.teams as team}
      <li><a href={`/teams/${team.id}`}>{team.name}</a></li>
    {/each}
  </ul>
{/if}
