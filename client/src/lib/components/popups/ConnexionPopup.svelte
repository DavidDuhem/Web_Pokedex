<script>
  import Popup from "./Popup.svelte";
  import AuthService from "$lib/../services/AuthService.js";

  const authService = new AuthService();

  export let showPopup;
  export let onLoginValidate;
  export let onRegisterValidate;
  export let onClose;

  let email = "";
  let password = "";

  let confirmationRegister = false;
  let errorLoging = false;

  async function trylogin() {
    confirmationRegister = false;
    errorLoging = false;
    try {
      await authService.login({ email, password }, fetch);
      onLoginValidate();
    } catch (err) {
      errorLoging = true;
      console.log("Error : " + err);
    }
  }

  async function tryRegister() {
    errorLoging = false;
    confirmationRegister = false;
    try {
      await authService.register({ email, password }, fetch);
      onRegisterValidate();
      confirmationRegister = true;
    } catch (err) {
      alert("Error while registering : " + err.message);
    }
  }

  function handleClose() {
    errorLoging = false;
    confirmationRegister = false;
    email = "";
    password = "";
    onClose();
  }
</script>

{#if showPopup}
  <Popup title="Connexion" onClose={handleClose}>
    <form class="flex flex-col gap-4 p-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1"
          >E-Mail</label
        >
        <input
          type="email"
          bind:value={email}
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Votre adresse e-mail"
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
      {#if confirmationRegister}
        <p class="text-green-600">
          Inscription réalisée avec succès. Vous pouvez maintenant vous
          connecter
        </p>
      {/if}
      {#if errorLoging}
        <p class="text-red-600">E-Mail ou mot de pass incorrect</p>
      {/if}
      <button
        class="bg-green-600 text-white px-4 py-2 mt-5 rounded hover:bg-green-700 transition"
        on:click={() => trylogin()}
      >
        Connexion
      </button>
      <button
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        on:click={() => tryRegister()}
      >
        Inscription
      </button>
    </form>
  </Popup>
{/if}
