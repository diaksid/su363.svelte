<script lang="ts">
  import { afterUpdate } from 'svelte';
  import { page } from '$app/stores';
  import { Icon } from '$ui/iconfy';
  import ToggleSearch from './components/TogglerSearch.svelte';
  import ToggleTheme from './components/ToggleTheme.svelte';
  import ToggleRoute from './components/ToggleRoute.svelte';
  import ToggleNav from './components/ToggleNav.svelte';
  import Waiting from './components/Waiting.svelte';
  import navigation from '$lib/configs/navigation';

  let className = '';
  export { className as class };

  let scrollY: any;
  $: scrolled = scrollY > 48;

  let frame: HTMLElement;
  let navbar: HTMLElement;
  const duration = 250;

  const close = () => {
    if (!navbar.classList.contains('opacity-0')) {
      navbar.classList.add('opacity-0');
      setTimeout(() => navbar.classList.add('invisible'), duration);
    }
  };

  const toggle = () => {
    if (navbar.classList.contains('opacity-0')) navbar.classList.remove('opacity-0', 'invisible');
    else close();
  };

  let waiting = false;
  const click = (ev: Event) => {
    if (waiting) {
      ev.preventDefault();
      ev.stopPropagation();
      toggle();
      return false;
    }
    return (waiting = true);
  };

  afterUpdate(() => setTimeout(() => (waiting = false), 500));
</script>

<svelte:window bind:scrollY />

<div
  bind:this={frame}
  class:fixed={scrolled}
  class:absolute={!scrolled}
  class="z-10 w-full fixed:bg-slate-700/90 overflow-offset
         transition-all ease-in-out origin-top
         {className}"
  style:transition-duration={`${duration}ms`}>
  <div
    class="relative
           flex flex-wrap justify-end items-center
           wrapper lg:container">
    <ToggleNav
      on:toggle={toggle}
      on:close={close}
      class="lg:hidden p-2 mr-auto text-slate-500 hover:text-slate-200"
      size={28} />

    <ToggleRoute
      class="p-2.5 lg:mr-auto
           text-cyan-600 hover:text-sky-300"
      size={25} />

    <Waiting
      class="pt-0.5 text-gray-800 dark:text-gray-200"
      {waiting}
      size={22} />

    <nav
      bind:this={navbar}
      id="navbar"
      class="grid align-middle
             grid-cols-1 lg:auto-cols-max lg:grid-flow-col lg:gap-4
             absolute z-0 left-0 top-0 mt-12 ml-1 rounded-md lg:static lg:mt-0 lg:ml-4 lg:mr-4 lg:rounded-none
             font-semibold uppercase
             text-lg xl:text-xl
             tracking-wide lg:tracking-wider
             bg-slate-700/95 lg:bg-transparent
             invisible lg:visible
             opacity-0 lg:opacity-100
             transition-opacity ease-in-out"
      style:transition-duration={`${duration}ms`}>
      {#each navigation as link}
        <!-- sveltekit:prefetch / sveltekit:prefetch -->
        <a
          on:click={click}
          class:disabled={link.href === $page.url.pathname}
          class="py-2 px-6 lg:px-2
                text-slate-300 lg:text-slate-700 fixed:text-slate-300 dark:text-slate-300
                hover:!text-sky-300 disabled:!text-cyan-600
                hover:bg-gray-500/50 lg:hover:bg-transparent"
          href={link.href}>
          {#if link.href === '/'}
            <Icon
              class="mt-0.5"
              icon="line-md:home-simple{$page.url.pathname === '/' ? '-twotone' : ''}"
              width="24"
              height="24">
              {@html link.label}
            </Icon>
          {:else}
            {@html link.label}
          {/if}
        </a>
      {/each}
    </nav>

    <ToggleTheme
      class="p-2.5
         text-cyan-600 hover:text-sky-300"
      size={25} />

    <ToggleSearch
      class="p-2.5 ml-5 mt-0.5
             text-slate-500 hover:text-slate-200"
      {frame}
      size={25}
      disabled={$page.url.pathname.indexOf('/search') === 0} />
  </div>
</div>
