<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from '$lib/seo/yandex/metrika';
  import { YandexSearchForm, YandexSearchSerp } from '$lib/ui/yandex/search';

  const robots = 'noindex, follow';
  const title = 'СУ 363 • Поиск';
  const description = 'Поиск на сайте предпрятия Строительное Управление № 363';
  const canonical = '';

  onMount(() => document?.lazyloadInstance?.update());
</script>

<YandexMetrikaHit
  {robots}
  {title}
  {description}
  {canonical} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1
      class="title"
      itemprop="name">
      Результаты поиска
    </h1>
  </header>

  <YandexSearchForm
    class="content mb-8 px-8 xs:pr-[44px] sm:pr-[52px] md:pr-[55px] lg:pr-[142px]"
    reload={true}
    reverse={true} />

  <YandexSearchSerp class="content pr-8 lg:pr-4" />
</main>
