import { addCollection } from '@iconify/svelte/offline';
import bundles from './bundles.json';
import './custom';

bundles.forEach((bundle: any) => addCollection(bundle));
console.log(`${import.meta.env?.SSR ? 'SSR' : 'CSR'} iconset`);

export { default as Icon } from './Icon.svelte';
