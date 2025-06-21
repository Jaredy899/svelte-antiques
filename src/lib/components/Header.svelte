<script>
  import LogoHeader from "./LogoHeader.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import AddressLink from "./AddressLink.svelte";
  import { page } from '$app/state';
  import { onNavigate } from '$app/navigation';

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Information', href: '/information' },
  ];

  $: isInformationPage = page.url.pathname === '/information';

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<header class="w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-colors duration-200">
  <!-- Theme Toggle - Fixed Position -->
  <div class="fixed right-4 top-24 lg:top-16 z-50">
    <ThemeToggle />
  </div>

  <!-- Header Info Section -->
  <div class="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3">
    <div class="mx-auto max-w-6xl px-4">
      <div class="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0 lg:space-x-8">
        <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <span class="font-medium">Phone:</span>
          <a href="tel:+12764771515" class="ml-2 text-blue-600 dark:text-blue-400 hover:underline">
            276-477-1515
          </a>
        </div>
        <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <span class="font-medium">Hours:</span>
          <span class="ml-2">Mon-Sat 10AM-6PM, Sun 1PM-4PM</span>
        </div>
        <div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <span class="font-medium">Address:</span>
          <AddressLink>
            <span class="ml-2 text-blue-600 dark:text-blue-400 hover:underline">227 W Main St, Abingdon, VA 24210</span>
          </AddressLink>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto max-w-6xl px-4 py-3 md:py-4">
    <!-- Logo Header -->
    <div class="flex justify-center mb-3 md:mb-4">
      <LogoHeader small={isInformationPage} />
    </div>

    <!-- Navigation -->
    <nav class="border-t border-b border-gray-200 dark:border-gray-700 py-2 md:py-3">
      <!-- Mobile and Desktop Navigation Combined -->
      <ul class="flex justify-center space-x-4 md:space-x-8 text-xl">
        {#each navItems as item}
          <li>
            <div class="text-black dark:text-gray-300">
              <a
                href={item.href}
                class="transition-colors {page.url.pathname === item.href ? 'text-gray-900 dark:text-white font-bold' : 'text-blue-600 hover:text-blue-800 hover:underline'}"
              >
                {item.label}
              </a>
            </div>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style>
  ::view-transition-old(logo),
  ::view-transition-new(logo) {
    animation: none;
    mix-blend-mode: normal;
  }
</style> 