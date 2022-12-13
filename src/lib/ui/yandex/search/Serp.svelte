<script type="ts">
  import { onMount, onDestroy } from 'svelte';
  import './index.css';

  let className: string = '';
  export { className as class };

  let result: HTMLElement;
  let interval: Timeout;

  onMount(() => {
    document.querySelectorAll('#navbar > a').forEach((el: any) => (el.target = '_self'));
    interval = setInterval(() => {
      if (typeof Ya !== 'undefined') {
        result.classList.remove('opacity-0');
        Ya.Site.Results.init();
        clearInterval(interval);
        interval = undefined;
      }
    }, 100);
  });
  onDestroy(() => interval && clearInterval(interval));
</script>

<svelte:head>
  <script
    src="https://site.yandex.net/v2.0/js/all.js"
    async></script>
</svelte:head>

<div
  bind:this={result}
  id="ya-site-results"
  class="opacity-0 transition-opacity duration-2000 ease-in
         bg-transparent
         {className}"
  data-bem={JSON.stringify({
    tld: 'ru',
    language: 'ru',
    encoding: '',
    htmlcss: '1.x',
    updatehash: true
  })} />
