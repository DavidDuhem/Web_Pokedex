<script>
  import ConnexionPopup from "../popups/ConnexionPopup.svelte";
  export let href = "";
  export let isConnected = false;

  let showPopup = false;

  async function confirmConnexion() {
    showPopup = false;
  }
</script>

{#if !isConnected}
  <button
    class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
    on:click={() => (showPopup = true)}
  >
    Connexion
  </button>

  <ConnexionPopup
    {showPopup}
    onClose={() => (showPopup = false)}
    onValidate={confirmConnexion}
  />
{:else}
  <button
    class="bg-green-600 text-white px-4 py-2 mt-5 rounded hover:bg-green-700 transition"
    on:click={() => (showPopup = true)}
  >
    Se déconnecter
  </button>
{/if}
