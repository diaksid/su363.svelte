import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'material-symbols',
  icons: {
    home: {
      body: `
        <path
          fill="currentColor"
            d="M4 21V9l8-6l8 6v12h-6v-7h-4v7Z"
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
