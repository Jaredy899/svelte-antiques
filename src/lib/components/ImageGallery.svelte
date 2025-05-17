<script lang="ts">
  export let images: string[] = [];
  export let title: string = '';
  export let columns: 1 | 2 | 3 | 4 = 3;
  export let aspectRatio: 'square' | 'video' | 'auto' = 'square';

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const aspectRatioClass = {
    'square': 'aspect-square',
    'video': 'aspect-video',
    'auto': 'aspect-auto'
  };

  let selectedImage: string | null = null;
  let lightboxOpen = false;
  let loadedImages: { [key: string]: boolean } = {};

  function openLightbox(image: string) {
    selectedImage = image;
    lightboxOpen = true;
  }

  function closeLightbox() {
    selectedImage = null;
    lightboxOpen = false;
  }

  function handleImageLoad(image: string) {
    loadedImages[image] = true;
    loadedImages = loadedImages; // trigger reactivity
  }

  function navigateImage(direction: 'prev' | 'next') {
    if (!selectedImage) return;
    const currentIndex = images.indexOf(selectedImage);
    let newIndex: number;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    }

    selectedImage = images[newIndex];
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!lightboxOpen) return;
    
    switch (event.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigateImage('prev');
        break;
      case 'ArrowRight':
        navigateImage('next');
        break;
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="py-8">
  {#if title}
    <h2 class="text-3xl font-serif font-bold text-center mb-8 text-gray-900 dark:text-white">{title}</h2>
  {/if}
  
  <div class={`grid ${gridCols[columns]} gap-6`}>
    {#each images as image, index}
      <button
        type="button"
        class={`relative ${aspectRatioClass[aspectRatio]} cursor-pointer group gallery-image`}
        on:click={() => openLightbox(image)}
      >
        {#if !loadedImages[image]}
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        {/if}
        <img
          src={image}
          alt={`Gallery image ${index + 1}`}
          class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          class:opacity-0={!loadedImages[image]}
          class:opacity-100={loadedImages[image]}
          loading="lazy"
          decoding="async"
          on:load={() => handleImageLoad(image)}
        />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
      </button>
    {/each}
  </div>
</section>

{#if lightboxOpen && selectedImage}
  <button 
    type="button"
    class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    on:click={closeLightbox}
  >
    <div class="relative w-full h-full flex items-center justify-center">
      <button 
        type="button"
        class="absolute top-4 right-4 text-white hover:text-gray-300"
        on:click|stopPropagation={closeLightbox}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        class="absolute left-4 text-white hover:text-gray-300 p-2"
        on:click|stopPropagation={() => navigateImage('prev')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        class="absolute right-4 text-white hover:text-gray-300 p-2"
        on:click|stopPropagation={() => navigateImage('next')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <img
        src={selectedImage}
        alt="Selected item"
        class="max-w-full max-h-[90vh] object-contain transition-transform duration-300"
      />
    </div>
  </button>
{/if}

<style>
  .gallery-image img {
    transition: transform 0.3s ease-in-out;
  }
</style> 