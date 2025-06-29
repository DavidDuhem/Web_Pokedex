<script>
  import Popup from "../../../lib/components/popups/Popup.svelte";

  export let showPopup;
  export let onClose;
  export let onValidate;

  let pokemonToAddId;

  function tryValidate(pokemonToAddId) {
    if (pokemonToAddId != null) {
      onValidate(pokemonToAddId);
    }
  }
</script>

{#if showPopup}
  <Popup title="Sélectionner un Pokémon" {onClose}>
    <button
      class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      on:click={() => tryValidate(pokemonToAddId)}
    >
      Valider
    </button>
  </Popup>
{/if}
