<script>
  import Popup from "./Popup.svelte";
  import AuthService from "$lib/../services/AuthService.js";
  import { preventDefault } from "svelte/legacy";

  const authService = new AuthService();

  export let showPopup;
  export let onLoginValidate;
  export let onRegisterValidate;
  export let onClose;

  let email = "";
  let username = "";
  let password = "";
  let confirmPassword = "";

  let confirmationRegister = false;
  let errorLoging = false;
  let passwordNotMatching = false;

  let isRegistering = false;

  async function trylogin() {
    resetMessages();

    try {
      await authService.login({ email, password }, fetch);
      onLoginValidate();
    } catch (err) {
      errorLoging = true;
      console.log("Error : " + err);
    }
  }

  async function tryRegister() {
    resetMessages();

    if (password !== confirmPassword) {
      passwordNotMatching = true;
      return;
    }

    try {
      await authService.register({ email, username, password }, fetch);
      onRegisterValidate();
      confirmationRegister = true;
      isRegistering = false;
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

  function resetMessages() {
    errorLoging = false;
    confirmationRegister = false;
    passwordNotMatching = false;
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
      {#if isRegistering}
        <div>
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 mb-1">Pseudo</label
          >
          <input
            type="text"
            bind:value={username}
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Votre pseudo"
            required
          />
        </div>
      {/if}
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
      {#if isRegistering}
        <div>
          <label
            for="confirm-password"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Confirmation du Mot de passe</label
          >
          <input
            type="password"
            bind:value={confirmPassword}
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="••••••••"
            required
          />
        </div>
      {/if}
      {#if confirmationRegister}
        <p class="text-green-600">
          Inscription réalisée avec succès. Vous pouvez maintenant vous
          connecter
        </p>
      {/if}
      {#if errorLoging}
        <p class="text-red-600">E-Mail ou mot de pass incorrect</p>
      {/if}
      {#if passwordNotMatching}
        <p class="text-red-600">Les mots de passes doivent être identiques</p>
      {/if}
      {#if !isRegistering}
        <button
          class="bg-green-600 text-white px-4 py-2 mt-5 rounded hover:bg-green-700 transition"
          on:click={() => trylogin()}
        >
          Connexion
        </button>
      {:else}
        <button
          class="bg-green-600 text-white px-4 py-2 mt-5 rounded hover:bg-green-700 transition"
          on:click={() => tryRegister()}
        >
          Valider Inscription
        </button>
      {/if}
      {#if !isRegistering}
        <button
          type="button"
          class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          on:click={() => (isRegistering = true)}
        >
          Inscription
        </button>
      {/if}
    </form>
  </Popup>
{/if}
