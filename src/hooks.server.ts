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

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');

  event.locals.userid = cookies['userid'] || crypto.randomUUID();

  const response = await resolve(event);

  if (!cookies['userid']) {
    response.headers.set(
      'set-cookie',
      cookie.serialize('userid', event.locals.userid, {
        path: '/',
        httpOnly: true
      })
    );
  }

  if (building && response.headers.get('content-type') === 'text/html') {
    return new Response(await minify(await response.text(), minification_options), {
      status: response.status,
      headers: response.headers
    });
  }

  return response;
};
