<script>
  export let title = "Popup";
  export let onClose;
</script>

<div class="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
  <div
    class="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full relative animate-fade-in"
  >
    <button
      class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      on:click={onClose}
      aria-label="Fermer"
    >
      ✖
    </button>

    <h2 class="text-xl font-bold mb-4 text-red-600">{title}</h2>

    <slot />
  </div>
</div>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fade-in 0.2s ease-out;
  }
</style>
