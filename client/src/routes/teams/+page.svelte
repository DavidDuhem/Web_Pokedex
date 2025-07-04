<script>
  import TeamService from "$lib/../services/TeamService.js";
  import TeamTable from "$lib/components/teams/TeamTable.svelte";
  import TeamForm from "$lib/components/teams/TeamForm.svelte";
  import { errorHandler } from "$lib/../utils/errorHandler";
  import { isLoggedIn } from "$lib/../stores/auth";

  /** @type {{ data: import('./$types').PageData }} */
  export let data;

  /*************************
   * Reset modifiers variables when the user disconnects
   *************************/

  $: if (!$isLoggedIn) {
    editingId = null;
    editName = "";
    editDescription = "";
  }

  /*************************
   * 📄 Default State
   *************************/

  const service = new TeamService();
  let teams = [...data.teams];

  /*************************
   * ➕ Creation Variables
   *************************/

  let name = "";
  let description = "";

  /*************************
   * ✏️ Edition Variables
   *************************/

  let editingId = null;
  let editName = "";
  let editDescription = "";

  /*************************
   * 🗑️ Deletion Variables
   *************************/

  let deletingId = null;

  /*************************
   * ➕ Creation Functions
   *************************/

  async function handleSubmit(event) {
    event.preventDefault();
    await errorHandler(async () => {
      const newTeam = await service.create({ name, description }, fetch);

      teams = [...teams, newTeam];
      name = "";
      description = "";
    }, "Error while creating team");
  }

  /*************************
   * ✏️ Edition Functions
   *************************/

  function startEdit(team) {
    editingId = team.id;
    editName = team.name;
    editDescription = team.description;
  }

  async function confirmEdit(id) {
    await errorHandler(async () => {
      const updatedTeam = await service.update(
        id,
        { name: editName, description: editDescription },
        fetch
      );
      teams = teams.map((t) => (t.id === id ? updatedTeam : t));
      editingId = null;
    }, "Error while updating team");
  }

  function cancelEdit() {
    editingId = null;
  }

  /*************************
   * 🗑️ Deletion Functions
   *************************/

  async function startDelete(id) {
    deletingId = id;
  }
  async function cancelDelete() {
    deletingId = null;
  }

  async function confirmDelete(id) {
    await errorHandler(async () => {
      await service.delete(id, fetch);
      teams = teams.filter((team) => team.id !== id);
      deletingId = null;
    }, "Error while deleting team");
  }
</script>

<div class="max-w-4xl mx-auto px-4">
  <h1 class="text-3xl font-bold text-red-600 mb-4">Mes Équipes</h1>

  <TeamForm bind:name bind:description onSubmit={handleSubmit} />

  {#if data.error}
    <p>Erreur : {data.error}</p>
  {:else if teams.length === 0}
    <p>Aucune équipe trouvée.</p>
  {:else}
    <TeamTable
      {teams}
      {editingId}
      {deletingId}
      bind:editName
      bind:editDescription
      {startEdit}
      {cancelEdit}
      {confirmEdit}
      {startDelete}
      {cancelDelete}
      {confirmDelete}
    />
  {/if}
</div>
