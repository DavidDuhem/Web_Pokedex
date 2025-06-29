<script>
  import DeleteButton from "../../../lib/components/basics/DeleteButton.svelte";

  export let teams = [];
  export let editingId;
  export let deletingId;
  export let editName;
  export let editDescription;
  export let startEdit;
  export let cancelEdit;
  export let confirmEdit;
  export let startDelete;
  export let cancelDelete;
  export let confirmDelete;

  console.log(
    "confirmDelete est une fonction ?",
    typeof confirmDelete === "function"
  );
</script>

<div class="rounded-xl shadow-md w-full max-w-4xl mx-auto">
  <table class="w-full border-collapse table-fixed">
    <thead class="bg-red-500 text-white">
      <tr>
        <th class="text-left px-4 py-3 w-[20%]">Nom</th>
        <th class="text-left px-4 py-3 w-[50%]">Description</th>
        <th class="text-center px-4 py-3 w-[30%]">Actions</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-red-100">
      {#each teams as team}
        <tr>
          <td
            class="px-4 py-3 font-semibold text-gray-800 whitespace-normal break-words"
          >
            {#if editingId === team.id}
              <input
                type="text"
                bind:value={editName}
                class="w-full max-w-full px-2 py-1 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            {:else}
              <a href="/teams/{team.id}" class="link">{team.name}</a>
            {/if}
          </td>
          <td class="px-4 py-3 text-gray-600 whitespace-normal break-words">
            {#if editingId === team.id}
              <textarea
                bind:value={editDescription}
                rows="4"
                cols="40"
                class="w-full max-w-full px-2 py-1 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            {:else}
              {team.description}
            {/if}
          </td>
          <td class="px-4 py-3 text-right">
            <div class="flex flex-wrap justify-center gap-2">
              <DeleteButton
                id={team.id}
                onConfirm={confirmDelete}
                withConfirmation={true}
              />
              <!-- {#if editingId === team.id}
                <button
                  class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  on:click={() => confirmEdit(team.id)}
                >
                  Enregistrer
                </button>
                <button
                  class="bg-gray-400 text-black px-3 py-1 rounded hover:bg-gray-500 transition"
                  on:click={cancelEdit}
                >
                  Annuler
                </button>
              {:else if deletingId !== team.id}
                <button
                  on:click={() => startEdit(team)}
                  class="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
                >
                  Modifier
                </button>
              {/if}

              {#if deletingId === team.id}
                <button
                  class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  on:click={() => confirmDelete(team.id)}
                >
                  Valider
                </button>
                <button
                  class="bg-gray-400 text-black px-3 py-1 rounded hover:bg-gray-500 transition"
                  on:click={cancelDelete}
                >
                  Annuler
                </button>
              {:else if editingId !== team.id}
                <button
                  class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  on:click={() => startDelete(team.id)}
                >
                  Supprimer
                </button>
              {/if} -->
            </div>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
