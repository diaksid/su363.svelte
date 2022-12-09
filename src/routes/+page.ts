import { sources, squares, info } from '$lib/assets/images/presentation';

export const load = async () => ({
  images: await sources(),
  thumbnails: await squares(),
  info: info
});
