<script>
  import BackButton from "../../../lib/components/basics/BackButton.svelte";
  import DeleteButton from "../../../lib/components/basics/DeleteButton.svelte";
  import TeamService from "../../../services/TeamService.js";

  /** @type {{ data: import('./$types').PageData }} */

  export let data;

  const service = new TeamService();

  async function confirmDelete(pokemonId) {
    const id = data.team.id;
    try {
      await service.deleteTeamPokemon(id, pokemonId, fetch);
      data.team.pokemons = data.team.pokemons.filter(
        (pokemon) => pokemon.id !== pokemonId
      );
    } catch (err) {
      alert("Error while deleting : " + err.message);
    }
  }
</script>

<BackButton href="/teams" />

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

  <div
    class="max-w-3xl mx-auto mt-8 mb-8 p-6 bg-white rounded-xl shadow-md border border-red-200"
  >
    <h3 class="text-xl font-bold text-red-600 mb-4">Pokémons de l'équipe</h3>

    {#if data.team.pokemons.length === 0}
      <p class="text-gray-500 italic">Aucun pokémon dans cette équipe.</p>
    {:else}
      <ul class="space-y-4">
        {#each data.team.pokemons as pokemon}
          <li
            class="flex items-start gap-4 border border-red-100 rounded-lg p-3 hover:bg-red-50 transition"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              alt={"Image de " + pokemon.name}
              class="w-24 h-24 object-cover rounded border border-red-300"
            />
            <div class="flex flex-col items-start">
              <span class="font-bold text-red-600">{pokemon.name}</span>
              <div class="flex flex-wrap items-start gap-5">
                <p><span class="font-bold italic">HP</span> : {pokemon.hp}</p>
                <p><span class="font-bold italic">ATK</span> : {pokemon.atk}</p>
                <p><span class="font-bold italic">DEF</span> : {pokemon.def}</p>
                <p>
                  <span class="font-bold italic">ATK_SPE</span> : {pokemon.atk_spe}
                </p>
                <p>
                  <span class="font-bold italic">DEF_SPE</span> : {pokemon.def_spe}
                </p>
                <p>
                  <span class="font-bold italic">SPEED</span>: {pokemon.speed}
                </p>
              </div>
            </div>
            <DeleteButton
              id={pokemon.id}
              onConfirm={confirmDelete}
              startText="x"
              withConfirmation={false}
            />
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{/if}
