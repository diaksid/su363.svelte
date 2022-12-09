<script lang="ts">
  import { blur, fly } from 'svelte/transition';
  import { sineIn, sineInOut, sineOut } from 'svelte/easing';
  import { route } from '$stores';

  export let referesh!: string;
  export let tag: string = 'div';

  $: transition = $route == 2 ? blur : fly;
  $: options = (() => {
    switch ($route) {
      case 2:
        return {
          in: {
            duration: 250,
            delay: 50,
            amount: 5,
            easing: sineIn
          },
          out: {
            duration: 50,
            easing: sineOut
          }
        };
      case 1:
        return {
          in: {
            x: 512,
            duration: 500,
            delay: 100,
            easing: sineInOut
          },
          out: {
            x: -512,
            duration: 250,
            easing: sineOut
          }
        };
      default:
        return {
          in: {
            y: -384,
            duration: 500,
            delay: 100,
            easing: sineInOut
          },
          out: {
            y: 384,
            duration: 250,
            easing: sineOut
          }
        };
    }
  })();
</script>

{#key referesh}
  <svelte:element
    this={tag}
    in:transition={options.in}
    out:transition={options.out}>
    <slot />
  </svelte:element>
{/key}
