<script>
  export let id;
  export let startText = "Supprimer";
  export let confirmText = "Valider";
  export let cancelText = "Annuler";
  export let withConfirmation = false;
  export let onConfirm;

  let isDeleting = false;

  function start() {
    isDeleting = true;
  }

  function cancel() {
    isDeleting = false;
  }

  async function confirm() {
    await onConfirm(id);
    isDeleting = false;
  }
</script>

{#if withConfirmation && isDeleting}
  <button
    class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
    on:click={confirm}
  >
    {confirmText}
  </button>
  <button
    class="bg-gray-400 text-black px-3 py-1 rounded hover:bg-gray-500 transition"
    on:click={cancel}
  >
    {cancelText}
  </button>
{:else}
  <button
    class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
    on:click={withConfirmation ? start : confirm}
  >
    {startText}
  </button>
{/if}
