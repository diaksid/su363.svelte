import website from '$lib/configs/website';
const { tileColor } = website;

const version = import.meta.env.VITE_APP_BUILD;
const canonical = new URL(import.meta.env.VITE_APP_CANONICAL).origin;

const data = {
  version,
  api_version: 1,
  layout: {
    logo: `${canonical}/favicon/tableau/60.png?v=${version}`, //encodeURIComponent()
    color: tileColor,
    show_title: true
  }
};

export const prerender = true;

export const GET = function get({ setHeaders }: unknown) {
  setHeaders({
    'content-type': 'application/json'
  });
  return new Response(JSON.stringify(data));
};
