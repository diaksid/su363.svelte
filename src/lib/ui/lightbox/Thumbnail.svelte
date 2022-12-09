<script lang="ts">
  import { getContext } from 'svelte';

  export let id: number = 0;

  const openImage: (id: number) => void = getContext('openImage');

  if (!id) {
    const fn: Function = getContext('counterThumbnails');
    id = fn();
  }
</script>

<div
  on:click={() => openImage(id)}
  class="static cursor-zoom-in"
  class:svelte-lightbox-thumbnail={true}
  {...$$restProps}>
  <slot />
</div>

<style lang="postcss">
  :global(.svelte-lightbox-thumbnail > *) {
    @apply max-w-full h-auto;
  }
</style>
