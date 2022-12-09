import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'material-symbols',
  icons: {
    menu: {
      body: `
        <path
          fill="currentColor"
          d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"
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
