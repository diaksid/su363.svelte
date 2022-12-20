<script lang="ts">
  import { onMount } from 'svelte';
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import Grid from '$components/home/Grid.svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  import website from '$lib/configs/website';
  const { tel, address, map } = website;

  const title = 'СУ 363 • Строительное Управление № 363 Москва';
  const description =
    'Строительство и ремонт, строительный и технический надзор в Москве. Строительное Управление № 363';
  onMount(() => document?.lazyloadInstance?.update());
</script>

<Metrika
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <div
    class="container pb-4
              flex flex-wrap items-start"
    itemscope
    itemtype="http://schema.org/Organization">
    <header class="flex flex-col grow mb-4">
      <h1
        class="mb-8
                 font-sans font-extrabold text-shadow
                 text-7xl sm:text-9xl">
        <span class="text-rose-700">СУ</span>
        <span class="text-gray-600">363</span>
      </h1>
      <h2
        class="ml-2
                 text-shadow text-2xl md:text-3xl 2xl:text-5xl">
        Строительное Управление №&nbsp;363 Москва
      </h2>
    </header>
    <div
      class="w-full lg:max-w-xs xl:max-w-sm mx-auto pt-4 px-2 mb-4
             flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-3
             text-slate-300">
      <a
        class="font-semibold text-2xl sm:text-4xl lg:text-3xl hover:text-sky-500"
        href="tel://{tel.replace(/[\s-()]/g, '')}"
        itemprop="telephone">
        {@html tel}
      </a>
      <a
        rel="nofollow noreferrer"
        class="xl:text-lg text-center lg:text-start hover:text-sky-500"
        href="//{map}"
        target="_blank"
        itemprop="address"
        itemscope
        itemtype="http://schema.org/PostalAddress">
        {@html address}
      </a>
    </div>
  </div>

  <Grid {data} />
</main>
