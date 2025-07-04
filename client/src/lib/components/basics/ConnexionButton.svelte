<script>
  import ConnexionPopup from "../popups/ConnexionPopup.svelte";

  import { isLoggedIn, profileId, token } from "../../../stores/auth.js";

  let showPopup = false;

  async function confirmConnexion() {
    showPopup = false;
  }
  async function confirmRegister() {}

  async function disconnect() {
    token.set(null);
    isLoggedIn.set(false);
    profileId.set(null);
    if (typeof document !== "undefined") {
      document.cookie = "token=; path=/; max-age=0";
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
    onLoginValidate={confirmConnexion}
    onRegisterValidate={confirmRegister}
  />
{:else}
  <button
    class="bg-green-600 text-white px-4 py-2 mt-5 rounded hover:bg-green-700 transition"
    on:click={disconnect}
  >
    Se déconnecter
  </button>
{/if}
