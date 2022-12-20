<script lang="ts">
  import { theme } from '$stores';
  import { Icon } from '$ui/iconfy';

  let className = '';
  export { className as class };
  export let size = 24;
</script>

<button
  on:click={theme.change}
  class="relative z-10 flex
         {className}"
  type="button"
  aria-haspopup="true"
  aria-expanded="false"
  aria-labelledby="">
  <Icon
    icon={`material-symbols:${$theme ? 'light' : 'dark'}-mode-outline`}
    width={size}
    height={size} />
</button>
