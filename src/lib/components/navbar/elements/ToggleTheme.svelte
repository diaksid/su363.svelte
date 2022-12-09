<script lang="ts">
  import { theme } from '$stores';
  import { Icon } from '$ui/iconfy';

  let className: string | null = null;
  export { className as class };
  export let size = 24;
</script>

<button
  class={className}
  type="button"
  aria-haspopup="true"
  aria-expanded="false"
  aria-labelledby=""
  on:click={theme.change}>
  <Icon
    icon="material-symbols:light-mode-outline"
    class={$theme ? 'block' : 'hidden'}
    width={size}
    height={size} />
  <Icon
    icon="material-symbols:dark-mode-outline"
    class={$theme ? 'hidden' : 'block'}
    width={size}
    height={size} />
</button>
