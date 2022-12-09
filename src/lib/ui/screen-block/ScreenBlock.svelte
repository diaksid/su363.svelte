<script lang="ts">
  import { onMount } from 'svelte';

  let className: string = '';
  export { className as class };

  let node: HTMLElement;
  onMount(() => {
    node.style.opacity = '0';
    node.style.pointerEvents = node.style.touchAction = 'none';
    setTimeout(() => node.remove(), 2001);
  });
</script>

<div
  class="fixed z-50 top-0 left-0 flex flex-col justify-center items-center
         w-screen h-screen
         bg-no-repeat bg-center bg-screen-block bg-1/4 sm:bg-1/10 lg:bg-1/20
         transition-opacity duration-2000 ease-out
         {className}"
  hidden
  bind:this={node} />
