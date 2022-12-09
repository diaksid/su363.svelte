<script lang="ts">
  import { time } from '$stores';

  let className: string = '';
  export { className as class };

  const timer = new Intl.DateTimeFormat('ru', {
    minute: '2-digit',
    second: '2-digit'
  });
</script>

<footer class="absolute z-10 left-0 bottom-0 w-full">
  <div
    class="container
           flex flex-row justify-between items-center
           leading-loose font-mono font-thin text-2xs xs:text-xs sm:text-sm sm:tracking-wide text-gray-400/75
           {className}">
    <div class="ml-4">СУ 363 © Москва 2022</div>
    <div class="mr-4">
      <a
        rel="noreferrer nofollow"
        class="hover:text-sky-500"
        href="https://kit.svelte.dev"
        target="_blank">
        Svelte.Kit
      </a> • <span class="text-slate-400">{timer.format($time)}</span>
    </div>
  </div>
</footer>
