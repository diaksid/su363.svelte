<script lang="ts">
  import { Lightboxes, Modal, Thumbnail } from '$ui/lightbox';
  import placeholder from '$lib/assets/icons/placeholder';

  export let data;
  let { images, thumbnails, info } = data;

  const loader = () => document?.lazyloadInstance?.update();
</script>

<section class="container pb-12 sm:pb-16">
  <Lightboxes
    class="grid grid-cols-none sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
             gap-8 md:gap-4 xl:gap-8 2xl:gap-12"
    css={{ overlay: 'overflow-offset' }}
    options={{ behaviour: 'loop' }}
    {loader}>
    <svelte:fragment slot="thumbnail">
      {#each thumbnails as thumbnail, idx}
        <Thumbnail>
          <figure>
            <img
              class="lazy
                       mx-auto mb-2
                       bg-no-repeat bg-center bg-1/5 bg-loading bg-gray-300 grayscale rounded-md shadow-lg shadow-slate-700
                       hover:grayscale-0 hover:shadow-slate-900
                       dark:shadow-slate-500 dark:hover:shadow-slate-300"
              src={placeholder}
              data-src={thumbnail.src}
              width={thumbnail.width}
              height={thumbnail.height}
              alt={info[idx].title.replace(/<[^>]*>/g, '').toLowerCase()}
              loading="lazy" />
            <figcaption class="text-center">
              <h4>{@html info[idx].title}</h4>
              {#if info[idx].address}
                <div>{@html info[idx].address}</div>
              {/if}
              {#if info[idx].description}
                <div class="text-sm">{@html info[idx].description}</div>
              {/if}
            </figcaption>
          </figure>
          <link
            rel="image"
            href={images[idx].src} />
          <link
            rel="thumbnailUrl"
            href={thumbnail.src} />
        </Thumbnail>
      {/each}
    </svelte:fragment>
    {#each images as image, idx}
      <Modal
        title={info[idx].title}
        description={info[idx].address}>
        <img
          class="bg-no-repeat bg-center bg-1/10 bg-loading"
          src={image.src}
          width={image.width}
          height={image.height}
          alt="skm: image {idx}"
          loading="lazy" />
      </Modal>
    {/each}
  </Lightboxes>
</section>
