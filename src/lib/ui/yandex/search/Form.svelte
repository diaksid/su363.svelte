<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { Icon } from '$ui/iconfy';
  import { beep } from '$utils/audio';

  let className = '';
  export { className as class };
  export let reload = false;

  const searchid = import.meta.env.VITE_YA_SEARCHID;

  let form: HTMLFormElement;
  let text: null | string;

  $: validation = () => {
    const val = text?.trim();
    return !!val && val !== $page.url.searchParams.get('text');
  };

  const handleSubmit = (ev: Event) => {
    if (validation()) {
      reload && form.submit();
    } else {
      beep();
      ev.preventDefault();
    }
  };

  onMount(() => (text = $page.url.searchParams.get('text')));
</script>

<form
  bind:this={form}
  on:submit|self={handleSubmit}
  id="ya-site-form"
  class="flex flex-row justify-between items-start gap-3
         {className}"
  class:flex-row-reverse={reload}
  action="/search"
  method="get"
  charset="utf-8">
  <input
    type="hidden"
    name="searchid"
    value={searchid} />
  <input
    type="hidden"
    name="l10n"
    value="ru" />
  <input
    type="hidden"
    name="reqenc"
    value="" />
  <div class="relative grow">
    <input
      bind:value={text}
      class="w-full py-0.5 px-2
           text-slate-700 bg-slate-300 rounded
           focus:bg-white focus:outline-none"
      class:text-red-800={!validation()}
      type="search"
      name="text" />
    <div
      class="absolute bottom-0 py-0.5 px-2
             opacity-80 font-semibold text-gray-500 first-letter:text-red-700
             transition-all duration-500 ease-in-out"
      class:right-0={reload}
      class:bottom-full={text}
      class:opacity-100={text}>
      Яндекс
    </div>
  </div>
  <button
    class="text-sky-600 hover:text-sky-300 disabled:!text-gray-500/50"
    type="submit"
    disabled={!validation()}>
    <Icon
      icon="wpf:search"
      class="h-7 w-7 -mt-0.5"
      hFlip={!reload} />
  </button>
</form>
