<script lang="ts">
  export let waiting: boolean;
  export let size = 24;
  let className: string | undefined = undefined;
  export { className as class };
</script>

<div
  class:invisible={!waiting}
  class={className}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="animate-spin"
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24">
    <circle
      stroke="currentColor"
      stroke-width="4"
      stroke-opacity=".25"
      cx="12"
      cy="12"
      r="10" />
    <path
      fill="currentColor"
      stroke-opacity=".75"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
</div>
