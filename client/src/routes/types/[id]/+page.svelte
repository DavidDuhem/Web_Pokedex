<script>
  /** @type {{ data: import('./$types').PageData }} */
  import TypeTag from "$lib/components/types/TypeTag.svelte";
  import PokemonCardTable from "$lib/components/pokemons/PokemonCardTable.svelte";

  let { data } = $props();

  const type = data.type;
</script>

{#if !type}
  <p class="text-red-600 text-center text-lg">Aucun Type trouvé.</p>
{:else}
  <div class="max-w-4xl mx-auto px-4">
    <div class="flex items-center gap-5 mb-15">
      <h1 class="text-3xl font-bold text-red-600">
        Pokémons correspondants au type
      </h1>
      <TypeTag {type} />
    </div>
    <PokemonCardTable pokemons={type.pokemons} fromUrl={`/types/${type.id}`} />
  </div>
{/if}
