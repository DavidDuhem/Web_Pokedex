<script>
  import TeamService from "../../services/TeamService.js";
  import BackButton from "../../lib/components/basics/BackButton.svelte";
  import TeamTable from "../../lib/components/teams/TeamTable.svelte";
  import TeamForm from "../../lib/components/teams/TeamForm.svelte";
  import { ssrImportKey } from "vite/module-runner";

  /** @type {{ data: import('./$types').PageData }} */
  export let data;

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

    try {
      const newTeam = await service.create({ name, description }, fetch);

      teams = [...teams, newTeam];
      name = "";
      description = "";
    } catch (err) {
      alert("Error while creating : " + err.message);
    }
  }

  /*************************
   * ✏️ Edition Functions
   *************************/

  function startEdit(team) {
    console.log("STARTING EDIT");
    editingId = team.id;
    editName = team.name;
    editDescription = team.description;
  }

  async function confirmEdit(id) {
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
    console.log("CANCELING EDIT");
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
    try {
      await service.delete(id, fetch);
      teams = teams.filter((team) => team.id !== id);
      deletingId = null;
    } catch (err) {
      alert("Error while deleting : " + err.message);
    }
  }
</script>

<div class="max-w-4xl mx-auto mt-8 px-4">
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
