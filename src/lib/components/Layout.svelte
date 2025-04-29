<script>
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="Abingdon Antiques and More - Your premier destination for antiques and collectibles in Abingdon, Virginia" />
</svelte:head>

<div class="min-h-screen flex flex-col font-sans text-lg">
  <slot />
</div>

<style>
  :global(html) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  :global(body) {
    background-color: white;
    color: black;
    transition: background-color 0.2s, color 0.2s;
    font-size: 1.125rem; /* 18px */
  }

  :global(body.dark) {
    background-color: #111827;
    color: white;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: 'Cinzel', serif;
  }
</style> 