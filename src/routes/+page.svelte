<script lang="ts">
  import { onMount } from 'svelte';
  import { Hit as Metrika } from '$ui/yandex/metrika';
  import { Form } from '$ui/yandex/search';
  import Grid from '$components/home/Grid.svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  const title = 'СУ 363 • Строительное Управление № 363 Москва';
  const description =
    'Строительство и ремонт, строительный и технический надзор в Москве. Строительное Управление № 363';

  let search: ConstructorOfATypedSvelteComponent;

  onMount(() => {
    search = Form;
    document?.lazyloadInstance?.update();
  });
</script>

<Metrika
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <div class="container pb-10
              flex flex-wrap items-start">
    <header class="flex flex-col grow">
      <h1 class="mb-8
                 font-sans font-extrabold text-shadow
                 text-7xl sm:text-9xl">
        <span class="text-rose-700">СУ</span>
        <span class="text-gray-600">363</span>
      </h1>
      <h2 class="ml-2
                 text-shadow text-2xl md:text-3xl 2xl:text-5xl">
        Строительное Управление №&nbsp;363 Москва
      </h2>
    </header>
    <div class="w-full lg:max-w-xs xl:max-w-sm mx-auto px-2 pt-7 ">
      <svelte:component this={search} />
    </div>
  </div>

  <Grid {data} />
</main>
