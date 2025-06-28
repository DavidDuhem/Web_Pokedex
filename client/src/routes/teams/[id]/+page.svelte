<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

{#if data.error}
  <p>Erreur : {data.error}</p>
{:else if !data.team}
  <p>Équipe non trouvée.</p>
{:else}
  <h1>{data.team.name}</h1>
  <p>{data.team.description}</p>
  <!-- autres infos -->
{/if}
