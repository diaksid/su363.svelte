import { addCollection } from '@iconify/svelte/dist/OfflineIcon.svelte';

addCollection({
  prefix: 'material-symbols',
  icons: {
    'table-rows': {
      body: `
        <path
          fill="currentColor"
          d="M21 21v-4.65H3V21h18Zm0-6.65V9.625H3v4.725h18Zm0-6.725V3H3v4.625h18Z"
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
