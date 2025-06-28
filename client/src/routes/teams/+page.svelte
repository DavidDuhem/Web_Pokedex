<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<div class="max-w-4xl mx-auto mt-8 px-4">
  <h1 class="text-3xl font-bold text-red-600 mb-4">Mes Équipes</h1>

  <!-- Formulaire d’ajout -->
  <form class="flex flex-col gap-4 sm:flex-row sm:items-end mb-6">
    <div class="flex-1">
      <label
        class="block text-sm font-medium text-gray-700 mb-1 hidden"
        for="name">Nom</label
      >
      <input
        id="name"
        type="text"
        placeholder="Nom de l'équipe"
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
  {:else if !data.teams || data.teams.length === 0}
    <p>Aucune équipe trouvée.</p>
  {:else}
    <!-- Tableau des équipes -->
    <div class="rounded-xl shadow-md w-full max-w-4xl mx-auto">
      <table class="w-full border-collapse table-fixed">
        <thead class="bg-red-500 text-white">
          <tr>
            <th class="text-left px-4 py-3 w-[20%]">Nom</th>
            <th class="text-left px-4 py-3 w-[50%]">Description</th>
            <th class="text-left px-4 py-3 w-[30%]">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-red-100">
          {#each data.teams as team}
            <tr>
              <td
                class="px-4 py-3 font-semibold text-gray-800 whitespace-normal"
              >
                {team.name}
              </td>
              <td class="px-4 py-3 text-gray-600 whitespace-normal break-words">
                {team.description}
              </td>
              <td class="px-4 py-3 text-right">
                <div class="flex flex-wrap justify-center gap-2">
                  <button
                    class="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition"
                  >
                    Modifier
                  </button>
                  <button
                    class="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Configurer
                  </button>
                </div>
              </td>
            </tr>
          {/each}
          <!-- Ajoute plus de lignes dynamiquement ici -->
        </tbody>
      </table>
    </div>
  {/if}
</div>
