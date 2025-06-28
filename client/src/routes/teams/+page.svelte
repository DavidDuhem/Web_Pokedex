<script>
  import TeamService from "../../services/TeamService.js";

  /** @type {{ data: import('./$types').PageData }} */
  export let data;

  const service = new TeamService();
  let teams = [...data.teams];

  let editingId = null;

  let editName = "";
  let editDescription = "";
  let name = "";
  let description = "";

  function startEdit(team) {
    editingId = team.id;
    editName = team.name;
    editDescription = team.description;
  }

  async function saveEdit(id) {
    try {
      const updatedTeam = await service.update(
        id,
        { name: editName, description: editDescription },
        fetch
      );
      teams = teams.map((t) => (t.id === id ? updatedTeam : t));
      editingId = null;
    } catch (err) {
      alert("Error while updating: " + err.message);
    }
  }

  function cancelEdit() {
    editingId = null;
  }

  async function handleDelete(id) {
    try {
      await service.delete(id, fetch);
      teams = teams.filter((team) => team.id !== id);
    } catch (err) {
      alert("Error while deleting : " + err.message);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const newTeam = await service.create({ name, description }, fetch);

      teams = [...teams, newTeam];
      name = "";
      description = "";
    } catch (err) {
      alert("Erreur lors de la création : " + err.message);
    }
  }
</script>

<div class="p-5">
  <a
    href="/"
    class="bg-red-500 text-white px-6 py-2 mt-5 ml-5 rounded-lg hover:bg-red-600 transition h-fit"
  >
    ← Retour
  </a>
</div>

<div class="max-w-4xl mx-auto mt-8 px-4">
  <h1 class="text-3xl font-bold text-red-600 mb-4">Mes Équipes</h1>

  <!-- Formulaire d’ajout -->
  <form
    onsubmit={handleSubmit}
    class="flex flex-col gap-4 sm:flex-row sm:items-end mb-6"
  >
    <div class="flex-1">
      <label
        class="block text-sm font-medium text-gray-700 mb-1 hidden"
        for="name">Nom</label
      >
      <input
        id="name"
        type="text"
        placeholder="Nom de l'équipe"
        bind:value={name}
        class="w-full px-4 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
    <div class="flex-1">
      <label
        class="block text-sm font-medium text-gray-700 mb-1 hidden"
        for="description">Description</label
      >
      <input
        id="description"
        type="text"
        placeholder="Description"
        bind:value={description}
        class="w-full px-4 py-2 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
    <button
      type="submit"
      class="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition h-fit"
    >
      Ajouter
    </button>
  </form>

  {#if data.error}
    <p>Erreur : {data.error}</p>
  {:else if teams.length === 0}
    <p>Aucune équipe trouvée.</p>
  {:else}
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
                    class="w-full max-w-full px-2 py-1 border rounded border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
                    class="w-full max-w-full px-2 py-1 border rounded border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                {:else}
                  {team.description}
                {/if}
              </td>
              <td class="px-4 py-3 text-right">
                <div class="flex flex-wrap justify-center gap-2">
                  {#if editingId === team.id}
                    <button
                      class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                      onclick={() => saveEdit(team.id)}
                    >
                      Enregistrer
                    </button>
                    <button
                      class="bg-gray-400 text-black px-3 py-1 rounded hover:bg-gray-500 transition"
                      onclick={cancelEdit}
                    >
                      Annuler
                    </button>
                  {:else}
                    <button
                      onclick={() => startEdit(team)}
                      class="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
                    >
                      Modifier
                    </button>
                    <button
                      class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      onclick={() => handleDelete(team.id)}
                    >
                      Supprimer
                    </button>
                  {/if}
                  <!-- <button
                    class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Configurer
                  </button> -->
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>
