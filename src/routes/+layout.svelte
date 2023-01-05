<script lang="ts">
  import { browser } from '$app/environment';
  import LazyLoad from 'vanilla-lazyload';
  import { Navbar, Footer } from '$lib/components';
  import { RouteTransition, ScreenBlock } from '$lib/ui';
  import { YandexMetrikaInit } from '$lib/seo/yandex/metrika';

  import website from '$lib/configs/website';
  const { shortName, themeColor, tileColor } = website;

  import type { PageData } from './$types';
  export let data: PageData;

  const build = import.meta.env.VITE_APP_BUILD;

  import '../app.css';

  if (browser) {
    if (!('color-theme' in localStorage)) {
      localStorage.setItem('color-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    if (!document.lazyloadInstance)
      document.lazyloadInstance = new LazyLoad({
        // use_native: true,
        threshold: 0
      });
  }
</script>

<svelte:head>
  <link
    rel="alternate icon"
    href="/favicon.ico?v={build}"
    sizes="any" />
  <link
    rel="apple-touch-icon"
    href="/favicon/maskable/192.png?v={build}" />
  <link
    rel="icon"
    href="/favicon/icon.svg?v={build}"
    type="image/svg+xml" />
  <meta
    name="theme-color"
    content={themeColor} />
  <meta
    name="msapplication-TileColor"
    content={tileColor} />
  <meta
    name="application-name"
    content={shortName} />
  <meta
    name="apple-mobile-web-app-title"
    content={shortName} />
</svelte:head>

<RouteTransition
  referesh={data.referesh}
  mode={1}
  class="flex flex-col grow">
  <slot />
</RouteTransition>

<Footer />

<Navbar />

<ScreenBlock class="bg-slate-800" />

<YandexMetrikaInit />
