import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'mdi',
  icons: {
    'menu-swap-outline': {
      body: `
        <path
          fill="currentColor"
          d="m12 3.5l-6 6V11h12V9.5l-6-6m0 2.83L14.67 9H9.33L12 6.33M6 13v1.5l6 6l6-6V13H6m3.33 2h5.34L12 17.67L9.33 15Z"
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
