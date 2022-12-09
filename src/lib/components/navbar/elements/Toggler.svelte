<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let className = '';
  export { className as class };

  const outside = (node: HTMLElement) => {
    const handle = (event: any) => node.contains(event.target) || dispatch('close');
    document.addEventListener('click', handle, true);
    return {
      destroy() {
        document.removeEventListener('click', handle, true);
      }
    };
  };
</script>

<button
  use:outside
  class="relative z-10
         {className}"
  on:click={() => dispatch('toggle')}>
  <slot />
</button>
