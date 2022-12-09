import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'material-symbols',
  icons: {
    code: {
      body: `
        <path
          fill="currentColor"
            d="m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6Z"
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
