import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'mdi',
  icons: {
    home: {
      body: `
        <path
          fill="currentColor"
          d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
        />
        `
        .trim()
        .replace(/\s{2,}/g, ' ')
        .replace(/\n/g, '')
    }
  },
  width: 24,
  height: 24
});
