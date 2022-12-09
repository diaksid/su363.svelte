import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'mdi',
  icons: {
    'home-variant': {
      body: `
        <path
          fill="currentColor"
          d="m12 3l8 6v12h-5v-7H9v7H4V9l8-6Z"
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
