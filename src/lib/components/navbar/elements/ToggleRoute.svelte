<script lang="ts">
  import { route } from '$stores';
  import { Icon } from '$ui/iconfy';

  let className: string | null = null;
  export { className as class };
  export let size = 24;

  $: icon = $route === 2 ? 'material-symbols:adjust-outline' : 'mdi:transfer-down';
  $: rotate = $route === 0 ? null : '90deg';
</script>

<button
  class={className}
  type="button"
  aria-haspopup="true"
  aria-expanded="false"
  aria-labelledby=""
  on:click={route.change}>
  <Icon
    {icon}
    {rotate}
    width={size}
    height={size} />
</button>
