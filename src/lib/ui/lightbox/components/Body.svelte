<script lang="ts">
  import { blur } from 'svelte/transition';
  import type { Options } from '../Types';

  export let fullscreen: boolean;
  export let scrollable: boolean;
  export let options: Options;
</script>

<div
  in:blur={{ duration: options.duration }}
  out:blur={{ duration: options.duration && options.duration / 2 }}
  class:fullscreen
  class:scrollable
  class="lightbox-body
         relative z-10 flex overflow-hidden cursor-default"
  class:overflow-y-auto={scrollable}>
  <slot />
</div>

<style lang="postcss">
  div.fullscreen {
    @apply justify-center items-center max-w-inherit max-h-inherit w-inherit h-inherit;
  }
  :global(div.lightbox-body > *) {
    @apply max-h-inherit h-inherit;
  }
  :global(div.lightbox-body > img) {
    @apply grow object-contain;
  }
  :global(div.lightbox-body.scrollable > :not(img)) {
    @apply max-h-full h-full;
  }
</style>
