<script lang="ts">
  const address = "227 W Main St, Abingdon, VA 24210";
  
  function getGoogleMapsUrl(address: string) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }
</script>

<a 
  href={getGoogleMapsUrl(address)}
  target="_blank"
  rel="noopener noreferrer"
  class="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
>
  <slot />
</a> 