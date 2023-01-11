<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, YandexSearchForm, YandexSearchSerp } from 'daks-svelte';

  const robots = 'noindex, follow';
  const title = 'СКМ • Поиск';
  const description = 'Поиск на сайте предпрятия СКМ';
  const canonical = '';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {robots}
  {title}
  {description}
  {canonical} />

<main
  class="dark:bg-transparent"
  itemprop="mainContentOfPage">
  <header class="content w-full mb-8">
    <h1 class="title">Результаты поиска</h1>
  </header>

  <YandexSearchForm
    class="content mb-8 px-8 xs:pr-[44px] sm:pr-[52px] md:pr-[55px] lg:pr-[142px]"
    reload={true}
    reverse={true} />

  <YandexSearchSerp class="content mb-16 pr-8 lg:pr-4" />
</main>
