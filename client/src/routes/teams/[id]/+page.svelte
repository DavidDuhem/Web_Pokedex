<script>
  import { isLoggedIn, token } from "$lib/../stores/auth.js";

  import BackButton from "$lib/components/basics/BackButton.svelte";
  import ConnexionButton from "$lib/components/basics/ConnexionButton.svelte";
  import DeleteButton from "$lib/components/basics/DeleteButton.svelte";
  import PopupTeamPokemon from "$lib/components/popups/PopupTeamPokemon.svelte";
  import TypeTag from "$lib/components/types/TypeTag.svelte";
  import TeamService from "$lib/../services/TeamService.js";
  import { getCookie } from "$lib/../utils/tokenValidation.js";
  import { errorHandler } from "$lib/../utils/errorHandler";

  /** @type {{ data: import('./$types').PageData }} */

  export let data;

  let team = data?.team;
  let allPokemons = data.allPokemons?.data;

  let showPopup = false;

  const profileCookie = getCookie("profileId");
  let profileId = profileCookie ? parseInt(profileCookie, 10) : null;

  const teamService = new TeamService();

  async function confirmDelete(pokemonId) {
    await errorHandler(async () => {
      const id = team.id;
      await teamService.deleteTeamPokemon(id, pokemonId, fetch);

      const index = team.pokemons.findIndex(
        (pokemon) => pokemon.id === pokemonId
      );
      if (index !== -1) {
        team.pokemons = [
          ...team.pokemons.slice(0, index),
          ...team.pokemons.slice(index + 1),
        ];
      }
    }, "Error while deleting team");
  }

  async function confirmAddPokemon(pokemonId) {
    await errorHandler(async () => {
      const id = team.id;
      await teamService.addTeamPokemon(id, { pokemonId }, fetch);
      const newPokemon = allPokemons.find(
        (pokemon) => pokemon.id === pokemonId
      );
      if (newPokemon) {
        team.pokemons = [...team.pokemons, newPokemon];
      }
    }, "Error while adding pokemon");
    showPopup = false;
  }

  function onPokemonListUpdated(newList) {
    allPokemons = newList;
  }

  function handleAddPopup() {
    showPopup = true;
  }
</script>

{#if data.error}
  <p>Erreur : {data.error}</p>
{:else if !team}
  <p>Équipe non trouvée.</p>
{:else}
  <div
    class="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md border border-red-200"
  >
    <div class="flex flex-col sm:flex-row items-start gap-6">
      <img
        src="https://www.123-stickers.com/7667/autocollant-sacha-et-pikachu-pokemon.jpg"
        alt="Detail Équipe"
        class="w-64 h-64 object-cover rounded-lg border-2 border-red-500"
      />
      <div class="flex-1">
        <h2 class="text-2xl font-bold text-red-600 mb-2">{team.name}</h2>
        <p class="text-gray-700">{team.description}</p>
      </div>
    </div>
  </div>

  <div
    class="max-w-3xl mx-auto mt-8 mb-8 p-6 bg-white rounded-xl shadow-md border border-red-200"
  >
    <h3 class="text-xl font-bold text-red-600 mb-4">Pokémons de l'équipe</h3>

    {#if team.pokemons.length === 0}
      <p class="text-gray-500 italic">Aucun pokémon dans cette équipe.</p>
    {:else}
      <ul class="space-y-4">
        {#each team.pokemons as pokemon}
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
              <div class="flex gap-2 mt-2">
                {#each pokemon.types as type}
                  <a href={`/types/${type.id}`}>
                    <TypeTag {type} />
                  </a>
                {/each}
              </div>
              <div class="flex flex-wrap items-start gap-5 mt-2">
                <p><span class="font-bold italic">HP</span> : {pokemon.hp}</p>
                <p>
                  <span class="font-bold italic">ATK</span> : {pokemon.atk}
                </p>
                <p>
                  <span class="font-bold italic">DEF</span> : {pokemon.def}
                </p>
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
            {#if $isLoggedIn && profileId && profileId === team.profile_id}
              <DeleteButton
                id={pokemon.id}
                onConfirm={confirmDelete}
                startText="Retirer"
                withConfirmation={false}
              />
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
    {#if $isLoggedIn && team.pokemons.length < 6 && profileId && profileId === team.profile_id}
      <ul class="space-y-4 mt-4">
        <li
          class="border-2 border-dashed border-red-300 rounded-lg p-0 overflow-hidden"
        >
          <button
            type="button"
            class="w-full h-full flex flex-col justify-center items-center p-4 text-red-500 cursor-pointer hover:bg-red-50 transition focus:outline-none focus:ring-2 focus:ring-red-500"
            on:click={handleAddPopup}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span class="mt-2 font-semibold">Ajouter</span>
          </button>
        </li>
      </ul>
    {/if}
  </div>
{/if}

<PopupTeamPokemon
  {showPopup}
  onClose={() => (showPopup = false)}
  onValidate={confirmAddPokemon}
  {onPokemonListUpdated}
  pokemons={allPokemons}
/>
