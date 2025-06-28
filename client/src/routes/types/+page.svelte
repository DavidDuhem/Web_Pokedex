<script>
  /** @type {{ data: import('./$types').PageData }} */

  export let data;
</script>

{#if data.error}
  <p>Erreur : {data.error}</p>
{:else if !data.types || data.types.length === 0}
  <p>Aucun type trouvé.</p>
{:else}
  <ul>
    {#each data.types as type}
      <li><a href={`/types/${type.id}`}>{type.name}</a></li>
    {/each}
  </ul>
{/if}
