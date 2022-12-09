<script lang="ts">
  import { browser } from '$app/environment';
  import LazyLoad from 'vanilla-lazyload';
  import { Navbar } from '$components/navbar';
  import { Footer } from '$components/footer';
  import { RouteTransition } from '$ui/route-transition';
  import { ScreenBlock } from '$ui/screen-block';
  import { Init as Metrika } from '$ui/yandex/metrika';

  import website from '$lib/configs/website';
  const { shortName, themeColor, tileColor } = website;

  import type { PageData } from './$types';
  export let data: PageData;

  const build = import.meta.env.VITE_APP_BUILD;

  import '../app.css';

  if (browser && !document.lazyloadInstance)
    document.lazyloadInstance = new LazyLoad({
      // use_native: true,
      threshold: 0
    });
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

<Navbar />

<RouteTransition referesh={data.referesh}>
  <slot />
</RouteTransition>

<Footer />

<ScreenBlock class="bg-slate-800" />

<Metrika />
