<script>
  import TypeTag from "$lib/components/types/TypeTag.svelte";

  /** @type {{ data: import('./$types').PageData }} */

  export let data;
  const types = data.types;
</script>

{#if data.error}
  <p>Erreur : {data.error}</p>
{:else if !data.types || data.types.length === 0}
  <p>Aucun type trouvé.</p>
{:else}
  <div class="max-w-4xl mx-auto px-4">
    <h1 class="text-3xl font-bold text-red-600 mb-4">Liste des Types</h1>
    <div class="flex gap-5 flex-wrap align-center justify-center mt-20">
      {#each types as type}
        <a href={`/types/${type.id}`}>
          <TypeTag {type} />
        </a>
      {/each}
    </div>
  </div>
{/if}
