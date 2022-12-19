import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
//import { minifyPlugin } from './vite.plugins'

/*
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const pkg = JSON.parse(
  readFileSync(fileURLToPath(new URL('package.json', import.meta.url)), 'utf8')
);

process.env.APP_VERSION ??= pkg.version;
*/

const config: UserConfig = {
  logLevel: 'error',
  plugins: [
    sveltekit(),
    imagetools({
      defaultDirectives: new URLSearchParams({
        quality: '80',
        fit: 'cover',
        background: 'transparent',
        meta: 'width;height;quality;src'
      })
    })
//  minifyPlugin(),
],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  define: {
    //'process.env': process.env
    //__APP_VERSION__: JSON.stringify(pkg.version)
  }
};

export default config;
