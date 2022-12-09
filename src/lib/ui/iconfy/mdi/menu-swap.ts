import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'mdi',
  icons: {
    'menu-swap': {
      body: `
        <path
          fill="currentColor"
          d="m12 6l-5 5h10l-5-5m-5 7l5 5l5-5H7Z"
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
