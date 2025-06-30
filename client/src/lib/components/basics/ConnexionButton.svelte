<script>
  import ConnexionPopup from "../popups/ConnexionPopup.svelte";

  import { isLoggedIn } from "../../../stores/auth.js";

  let showPopup = false;

  async function confirmConnexion() {
    showPopup = false;
    isLoggedIn.set(true);
  }

  async function disconnect() {
    if (typeof document !== "undefined") {
      document.cookie = "token=; path=/; max-age=0";
      isLoggedIn.set(false);
    }
  }
</script>

{#if !$isLoggedIn}
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
    on:click={disconnect}
  >
    Se déconnecter
  </button>
{/if}
