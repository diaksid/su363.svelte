<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { page } from '$app/stores';
  import { Icon } from '$ui/iconfy';
  import ToggleRoute from './elements/ToggleRoute.svelte';
  import ToggleMenu from './elements/Toggler.svelte';
  import Waiting from './elements/Waiting.svelte';
  import ToggleTheme from './elements/ToggleTheme.svelte';
  import navigation from '$lib/configs/navigation';

  let className = '';
  export { className as class };

  let scrollY: any;
  $: scrolled = scrollY > 50;

  let nav: HTMLElement;
  const duration = 250;

  const close = () => {
    if (!nav.classList.contains('opacity-0')) {
      nav.classList.add('opacity-0');
      setTimeout(() => nav.classList.add('invisible'), duration);
    }
  };

  const toggle = () => {
    if (nav.classList.contains('opacity-0')) nav.classList.remove('opacity-0', 'invisible');
    else close();
  };

  let waiting = false;
  const click = (event: Event) => {
    if (waiting) {
      event.preventDefault();
      event.stopPropagation();
      toggle();
      return false;
    }
    return (waiting = true);
  };
  afterUpdate(() => setTimeout(() => (waiting = false), 500));
</script>

<svelte:window bind:scrollY />

<div
  class:fixed={scrolled}
  class:absolute={!scrolled}
  class="z-10 w-full fixed:bg-slate-700/90 overflow-offset
        {className}">
  <div
    class="wrapper lg:container
            flex justify-end items-center">
    <ToggleMenu
      on:toggle={toggle}
      on:close={close}
      class="lg:hidden p-2 ml-4 mr-auto text-slate-400 hover:text-slate-200">
      <Icon
        icon="material-symbols:menu"
        width="28"
        height="28" />
    </ToggleMenu>

    <ToggleRoute
      class="relative flex z-10 p-2.5 ml-4 lg:mr-auto
           text-cyan-600 hover:text-sky-300"
      size={22} />

    <Waiting
      {waiting}
      size={20}
      class="pt-0.5 md:mr-4 text-gray-800 dark:text-gray-200" />

    <nav
      bind:this={nav}
      class="grid align-middle
           grid-cols-1 lg:auto-cols-max lg:grid-flow-col lg:gap-4
           absolute z-0 left-0 top-0 mt-12 ml-1 rounded-md lg:static lg:mt-0 lg:ml-0 lg:rounded-none
           bg-slate-700/95 lg:bg-transparent
           invisible lg:visible
           opacity-0 lg:opacity-100
           transition-opacity ease-in-out
           font-semibold uppercase
           text-lg xl:text-xl
           tracking-wide lg:tracking-wider"
      style:transition-duration={`${duration}ms`}>
      {#each navigation as link}
        <!-- sveltekit:prefetch / sveltekit:prefetch -->
        <a
          class:disabled={link.href === $page.url.pathname}
          class="py-2 px-6 lg:px-2
                text-slate-300 lg:text-slate-700 fixed:text-slate-300 dark:text-slate-300
                hover:!text-sky-300 disabled:!text-cyan-600
                hover:bg-gray-500/50 lg:hover:bg-transparent"
          href={link.href}
          on:click={click}>
          {#if link.href === '/'}
            <Icon
              class="-ml-2 lg:ml-0 linecap-round linejoin-round"
              icon="mdi:home{$page.url.pathname === '/' ? '' : '-outline'}"
              inline={true}
              width="28"
              height="28" />
          {:else}
            {@html link.label}
          {/if}
        </a>
      {/each}
    </nav>

    <ToggleTheme
      class="relative z-10 flex p-2.5 mr-4 lg:ml-4
         text-cyan-600 hover:text-sky-300"
      size={22} />
  </div>
</div>
