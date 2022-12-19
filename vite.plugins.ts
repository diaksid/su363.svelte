import { minify, type Options } from 'html-minifier-terser';
import type { Plugin } from 'vite';

export function minifyPlugin(options?: Options): Plugin {
  return {
    name: 'vite-plugin-minify',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml: (html) => {
      console.log('minifyPlugin');
      return minify(html, {
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
        useShortDoctype: true,
        ...options
      });
    }
  };
}

export default minifyPlugin;
