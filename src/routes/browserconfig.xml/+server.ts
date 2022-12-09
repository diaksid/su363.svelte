import website from '$lib/configs/website';
const { tileColor } = website;

export const prerender = true;

const build = import.meta.env.VITE_APP_BUILD;

export const GET = function get({ setHeaders }: unknown) {
  const xml = `
    <?xml build="1.0" encoding="utf-8"?>
    <browserconfig>
      <msapplication>
        <tile>
          <square70x70logo src="/favicon/mstile/70.png?v=${build}" />
          <square150x150logo src="/favicon/mstile/150.png?v=${build}" />
          <square310x310logo src="/favicon/mstile/310.png?v=${build}" />
          <wide310x150logo src="/favicon/mstile/310x150.png?v=${build}" />
          <TileImage src="/favicon/mstile/150.png?v=${build}" />
          <TileColor>${tileColor}</TileColor>
        </tile>
      </msapplication>
    </browserconfig>
    `
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/>\s+</g, '><');

  setHeaders({
    'content-type': 'application/xml'
  });

  return new Response(xml);
};
