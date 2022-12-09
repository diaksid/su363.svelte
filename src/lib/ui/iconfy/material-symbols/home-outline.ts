import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'material-symbols',
  icons: {
    'home-outline': {
      body: `
        <path
          fill="currentColor"
            d="M4 21V9l8-6l8 6v12h-6v-7h-4v7Zm2-2h2v-7h8v7h2v-9l-6-4.5L6 10Zm6-6.75Z"
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
