<script lang="ts">
  import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';

  export let id: string | undefined = undefined;
  //let className: string | undefined = undefined;
  //export { className as class };

  id != Date.now().toString(16) + ((Math.random() * 0x1000000) | 0).toString(16);
</script>

<Icon
  {id}
  {...$$restProps} />
