<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from 'daks-svelte';
  import HomeGrid from '$lib/components/home';

  import type { PageData } from './$types';
  export let data: PageData;

  const canonical = new URL(import.meta.env.VITE_APP_CANONICAL).origin;

  import microdata from '$lib/configs/microdata';
  const { itemtype, name, logo, email, telephone, address } = microdata.organization;

  const title = 'СУ 363 • Строительное Управление № 363 Москва';
  const description =
    'Строительство и ремонт, строительный и технический надзор в Москве. Строительное Управление № 363';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <div
    class="container py-8
              flex flex-wrap items-start"
    itemscope
    {itemtype}>
    <header class="flex flex-col grow mb-5">
      <h1
        class="mb-8
               font-sans font-extrabold text-shadow
               text-7xl sm:text-9xl"
        itemprop="name">
        <span class="text-rose-700">СУ</span>
        <span class="text-gray-600">363</span>
      </h1>
      <h2
        class="ml-2
               text-shadow text-xl sm:text-2xl md:text-3xl 2xl:text-5xl">
        Строительное Управление №&nbsp;363 Москва
      </h2>
      <meta
        itemprop="name"
        content={name} />
      <meta
        itemprop="email"
        content={email} />
      <meta
        itemprop="telephone"
        content={telephone} />
      <link
        itemprop="logo"
        href={`${canonical}${logo}`} />
    </header>
    <div
      class="w-full lg:max-w-xs xl:max-w-sm mx-auto lg:pt-4 px-2 mb-4
             flex flex-col justify-center items-center lg:items-start gap-3 lg:gap-5
             text-slate-300"
      itemprop="address"
      itemscope
      itemtype={address.itemtype}>
      <a
        class="font-semibold
               text-2xl sm:text-4xl lg:text-3xl xl:text-4xl
               hover:text-sky-500 hover:text-shadow
               transition-all duration-200 ease-in-out"
        href="tel://{telephone.replace(/[\s-()]/g, '')}">
        {telephone}
      </a>
      <a
        rel="nofollow noreferrer"
        class="text-center lg:text-start
               sm:text-lg md:text-xl lg:text-lg
               hover:text-sky-500 hover:text-shadow
               transition-all duration-200 ease-in-out"
        href={address.url}
        target="_blank"
        itemprop="url">
        <span itemprop="streetAddress">{@html address.streetAddress}</span>
      </a>
      <meta
        itemprop="postalCode"
        content={address.postalCode} />
      <meta
        itemprop="addressRegion"
        content={address.addressRegion} />
      <meta
        itemprop="addressLocality"
        content={address.addressLocality} />
    </div>
  </div>

  <HomeGrid {data} />
</main>
