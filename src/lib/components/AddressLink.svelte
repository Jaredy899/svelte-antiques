<script lang="ts">
  export let address: string;
  
  function getGoogleMapsUrl(address: string) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }
</script>

<a 
  href={getGoogleMapsUrl(address)}
  target="_blank"
  rel="noopener noreferrer"
  class="hover:text-gray-600 dark:hover:text-primary transition-colors"
>
  <slot />
</a> 