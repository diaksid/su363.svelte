<script lang="ts">
  import { route } from '$stores';
  import { Icon } from '$ui/iconfy';

  let className = '';
  export { className as class };
  export let size = 24;

  $: icon = $route === 2 ? 'material-symbols:adjust-outline' : 'mdi:transfer-down';
  $: rotate = $route === 0 ? null : '90deg';
</script>

<button
  on:click={route.change}
  class="relative z-10 flex
         {className}"
  type="button"
  aria-haspopup="true"
  aria-expanded="false"
  aria-labelledby="">
  <Icon
    {icon}
    {rotate}
    width={size}
    height={size} />
</button>
