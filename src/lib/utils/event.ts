/*import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export const outside = (node: HTMLElement) => {
  const handle = (event: any) => node.contains(event.target) || dispatch('close');
  document.addEventListener('click', handle, true);
  return {
    destroy() {
      document.removeEventListener('click', handle, true);
    }
  };
};*/

export const outside = (node: HTMLElement, cb: (node: null | HTMLElement) => void) => {
  const handle = (event: any) => node.contains(event.target) || cb(node);
  document.addEventListener('click', handle, true);
  return {
    destroy() {
      document.removeEventListener('click', handle, true);
    }
  };
};
