<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<div class="p-5">
  <a
    href="/teams"
    class="bg-red-500 text-white px-6 py-2 mt-5 ml-5 rounded-lg hover:bg-red-600 transition h-fit"
  >
    ← Retour
  </a>
</div>

{#if data.error}
  <p>Erreur : {data.error}</p>
{:else if !data.team}
  <p>Équipe non trouvée.</p>
{:else}
  <!-- autres infos -->
  <div
    class="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md border border-red-200"
  >
    <div class="flex flex-col sm:flex-row items-start gap-6">
      <!-- Image -->
      <img
        src="https://www.123-stickers.com/7667/autocollant-sacha-et-pikachu-pokemon.jpg"
        alt="Detail Équipe"
        class="w-64 h-64 object-cover rounded-lg border-2 border-red-500"
      />

      <!-- Infos -->
      <div class="flex-1">
        <h2 class="text-2xl font-bold text-red-600 mb-2">{data.team.name}</h2>
        <p class="text-gray-700">{data.team.description}</p>
      </div>
    </div>
  </div>
{/if}
