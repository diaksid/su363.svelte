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

<!--div class="ya-site-form ya-site-form_inited_no {className}"-->
<form
  bind:this={form}
  on:submit|self={handleSubmit}
  id="ya-site-form"
  class="flex flex-row justify-between items-center gap-3
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
  <input
    bind:value={text}
    class="grow py-0.5 px-2
           text-slate-700 bg-slate-300 rounded
           focus:bg-white focus:outline-none"
    class:text-red-800={!validation()}
    type="search"
    placeholder="Яндекс"
    name="text" />
  <button
    class="text-sky-600 hover:text-sky-300 disabled:!text-gray-500/50"
    type="submit"
    disabled={!validation()}>
    <Icon
      icon="wpf:search"
      class="h-7 w-7 -mt-0.5"
      hFlip={!reload} />
    <!--svg
        class="h-8 w-8 -mt-0.5"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
        </svg-->
  </button>
</form>
<!--/div-->
