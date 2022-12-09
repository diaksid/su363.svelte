import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'mdi',
  icons: {
    'transfer-down': {
      body: `
        <path
          fill="currentColor"
          d="M16 3v2H8V3h8m0 4v2H8V7h8m0 4v2H8v-2h8M5 15h14l-7 7l-7-7Z"
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
