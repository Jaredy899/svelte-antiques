<script lang="ts">
  export let small = false;
</script>

<div class="text-center font-display">
  <a href="/" class="inline-block hover:text-gray-600 dark:hover:text-primary transition-colors">
    <img 
      src="/images/logo.jpg" 
      alt="Abingdon Antiques and More Logo" 
      class="mx-auto {small ? 'h-16 md:h-20 lg:h-24' : 'h-24 md:h-32 lg:h-40'} object-contain transition-all duration-500 ease-in-out"
      style="view-transition-name: logo"
    />
  </a>
</div>

<style>
  img {
    view-transition-name: logo;
  }
</style> 