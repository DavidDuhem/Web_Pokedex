<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();

  import { onMount } from "svelte";

  import {
    types,
    typeLoading,
    typeError,
    loadTypes,
  } from "../../stores/TypeStore.js";

  onMount(() => {
    loadTypes();
  });
</script>

{#if $typeLoading}
  <p>Chargement...</p>
{:else if $typeError}
  <p>Erreur : {$typeError}</p>
{:else}
  <ul>
    {#each $types as type}
      <li>{type.name}</li>
    {/each}
  </ul>
{/if}
