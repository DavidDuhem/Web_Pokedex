<script>
  import "../app.css";
  import Header from "$lib/components/layout/Header.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";

  export let data;
</script>

<div class="min-h-screen flex flex-col">
  <Header {data} />

  <main class="flex-grow mt-20">
    <slot />
  </main>

  <Footer />
</div>
