<script>
  import "../app.css";
  import BackButton from "../lib/components/basics/BackButton.svelte";
  import ConnexionButton from "../lib/components/basics/ConnexionButton.svelte";

  export let data;
</script>

<header class="flex justify-between items-center p-5">
  {#if data.showBack}
    <BackButton href={data.backHref} />
  {/if}
  <ConnexionButton />
</header>

<slot />
