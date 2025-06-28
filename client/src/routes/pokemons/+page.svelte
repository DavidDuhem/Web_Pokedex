<script>
  /** @type {{ data: import('./$types').PageData }} */

  export let data;
</script>

{#if data.error}
  <p>Erreur : {data.error}</p>
{:else if !data.pokemons || data.pokemons.length === 0}
  <p>Aucun pokémon trouvé.</p>
{:else}
  <ul>
    {#each data.pokemons as pokemon}
      <li><a href={`/pokemons/${pokemon.id}`}>{pokemon.name}</a></li>
    {/each}
  </ul>
{/if}
