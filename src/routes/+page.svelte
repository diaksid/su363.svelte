<script lang="ts">
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import Grid from '$components/home/Grid.svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  const title = 'СУ 363 • Строительное Управление № 363 Москва';
  const description = 'Строительство и ремонт, строительный и технический надзор в Москве. Строительное Управление № 363';
</script>

<Metrika
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content pb-16">
    <h1
      class="mb-8
             font-sans font-extrabold text-shadow
             text-7xl sm:text-9xl">
      <span class="text-rose-700">СУ</span>
      <span class="text-gray-600">363</span>
    </h1>
    <h2
      class="ml-2
             text-3xl sm:text-4xl">
      Строительное Управление №&nbsp;363 Москва
    </h2>
  </header>

  <Grid {data} />
</main>
