<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '@iconify/svelte/offline';

  export let icon!: string;
  //export let id: undefined | string = undefined;

  //id ??= Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);
  let render = false;

  onMount(() => (render = true));
</script>

{#if render}
  {#key icon}
    <Icon
      {icon}
      {...$$props} />
  {/key}
{:else}
  <slot />
{/if}
