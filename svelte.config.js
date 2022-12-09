import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

import 'dotenv/config';
const toStatic = process.env.ADAPTER === 'static';

const adapter = toStatic ? adapterStatic : adapterNode;
const options = {
  fallback: toStatic ? 'error_page.html' : undefined,
  precompress: true
};

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    alias: {
      $components: resolve(__dirname, './src/lib/components'),
      $stores: resolve(__dirname, './src/stores'),
      $ui: resolve(__dirname, './src/lib/ui'),
      $utils: resolve(__dirname, './src/lib/utils')
    },

    adapter: adapter(options)

    //inlineStyleThreshold: 8192
  }
};

export default config;
