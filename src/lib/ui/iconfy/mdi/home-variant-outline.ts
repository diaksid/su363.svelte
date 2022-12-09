import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'mdi',
  icons: {
    'home-variant-outline': {
      body: `
        <path
          fill="currentColor"
          d="M9 13h6v6h3v-9l-6-4.5L6 10v9h3v-6m-5 8V9l8-6l8 6v12H4Z"
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
