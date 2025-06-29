<script>
  export let name;
  export let description;
  export let onSubmit;
</script>

<form
  on:submit|preventDefault={onSubmit}
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
