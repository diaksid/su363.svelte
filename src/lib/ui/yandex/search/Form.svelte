<script type="ts">
  let className: string = '';
  export { className as class };

  const searchid = import.meta.env.VITE_YA_SEARCHID;
  const action = '/search'; // 'https://yandex.ru/search/site/'
  const target = '_self'; // '_blank'
</script>

<div
  class="ya-site-form ya-site-form_inited_no
         {className}">
  <form
    class="flex flex-row justify-between items-center"
    {action}
    method="get"
    {target}
    charset="utf-8">
    <input
      type="hidden"
      name="searchid"
      value={searchid} />
    <input
      type="hidden"
      name="l10n"
      value="ru" />
    <input
      type="hidden"
      name="reqenc"
      value="" />
    <input
      class="grow py-0.5 px-2 rounded focus:outline-none text-gray-700"
      type="search"
      name="text"
      value="" />
    <input
      class="py-0.5 px-2 ml-2 bg-slate-700 rounded cursor-pointer"
      type="submit"
      value="Найти" />
  </form>
</div>
