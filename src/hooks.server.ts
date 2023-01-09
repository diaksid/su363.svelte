import type { Handle } from '@sveltejs/kit';
import { handle as _handle } from 'daks-svelte/app';

const redirects: any = {
  // '': ''
};
export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname in redirects) {
    return new Response(undefined, {
      status: 308,
      headers: {
        location: redirects[event.url.pathname]
      }
    });
  }
  return await _handle({ event, resolve });
};
