import type { Handle } from '@sveltejs/kit';

import * as cookie from 'cookie';

import { building } from '$app/environment';
import { minify } from 'html-minifier-terser';

const minification_options = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: true,
  useShortDoctype: true
};

const microdata = (pathname: string) => {
  const data: any = {};
  switch (pathname) {
    case '/about':
      data.page = 'AboutPage';
      break;
    case '/contacts':
      data.page = 'ContactPage';
      break;
    default:
      data.page = 'WebPage';
  }
  return data;
};

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');

  event.locals.userid = cookies['userid'] || crypto.randomUUID();

  const response = await resolve(event, {
    //transformPageChunk: ({ html }) => html.replace('%schema.page%', schema(event.url.pathname))
  });

  if (!cookies['userid']) {
    response.headers.set(
      'set-cookie',
      cookie.serialize('userid', event.locals.userid, {
        path: '/',
        httpOnly: true
      })
    );
  }

  if (response.headers.get('content-type') === 'text/html') {
    const schema = microdata(event.url.pathname);
    let html = (await response.text()).replace('%schema.page%', schema.page);
    if (building) html = await minify(html, minification_options);
    return new Response(html, {
      status: response.status,
      headers: response.headers
    });
  }

  return response;
};
