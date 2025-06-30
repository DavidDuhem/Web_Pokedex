<script>
  import Popup from "./Popup.svelte";
  import AuthService from "../../../services/AuthService.js";

  const authService = new AuthService();

  export let showPopup;
  export let onClose;
  export let onValidate;

  let username = "";
  let password = "";

  async function tryValidate() {
    try {
      await authService.login({ username, password }, fetch);
      onValidate();
    } catch (err) {
      alert("Error while loging : " + err.message);
    }
  }
</script>

{#if showPopup}
  <Popup title="Connexion" {onClose}>
    <form
      class="flex flex-col gap-4 p-4"
      on:submit|preventDefault={tryValidate}
    >
      <div>
        <label
          for="username"
          class="block text-sm font-medium text-gray-700 mb-1"
          >Nom d'utilisateur</label
        >
        <input
          type="text"
          bind:value={username}
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Votre pseudo"
          required
        />
      </div>

      <div>
        <label
          for="password"
          class="block text-sm font-medium text-gray-700 mb-1"
          >Mot de passe</label
        >
        <input
          type="password"
          bind:value={password}
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        class="bg-green-600 text-white px-4 py-2 mt-5 rounded hover:bg-green-700 transition"
        on:click={() => tryValidate()}
      >
        Connexion
      </button>
    </form>
  </Popup>
{/if}
