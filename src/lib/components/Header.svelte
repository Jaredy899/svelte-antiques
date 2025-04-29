<script>
  import LogoHeader from "./LogoHeader.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import { page } from '$app/stores';

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Information', href: '/information' },
  ];

  $: isInformationPage = $page.url.pathname === '/information';
</script>

<header class="w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-colors duration-200">
  <!-- Theme Toggle - Fixed Position -->
  <div class="fixed right-4 top-4 z-50">
    <ThemeToggle />
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
                class="hover:text-gray-600 dark:hover:text-primary transition-colors"
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