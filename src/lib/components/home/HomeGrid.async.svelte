<script lang="ts">
  import { Lightboxes, LightboxModal, LightboxThumbnail } from 'daks-svelte';
  import placeholder from 'daks-svelte/assets/icons/placeholder';

  export let data;

  const promise = data();

  const loader = () => document?.lazyloadInstance?.update();
</script>

<section class="container pb-12 sm:pb-16">
  {#await promise}
    <div
      class="w-80 aspect-video mx-auto
             bg-no-repeat bg-center bg-loading-data bg-1/3" />
  {:then { images, thumbnails, info }}
    <Lightboxes
      class="grid grid-cols-none sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
             gap-8 md:gap-4 xl:gap-8 2xl:gap-12"
      css={{ overlay: 'overflow-offset' }}
      options={{ behaviour: 'loop' }}
      {loader}>
      <svelte:fragment slot="thumbnail">
        {#each thumbnails as thumbnail, idx}
          <LightboxThumbnail>
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
                alt="skm: thumbnail {idx}"
                loading="lazy" />
              <figcaption class="text-center">
                <h4>{info[idx].title}</h4>
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
          </LightboxThumbnail>
        {/each}
      </svelte:fragment>
      {#each images as image, idx}
        <LightboxModal
          title={info[idx].title}
          description={info[idx].address}>
          <img
            class="bg-no-repeat bg-center bg-1/10 bg-loading"
            src={image.src}
            width={image.width}
            height={image.height}
            alt="skm: image {idx}"
            loading="lazy" />
        </LightboxModal>
      {/each}
    </Lightboxes>
  {:catch error}
    <div
      class="error
             w-80 aspect-video mx-auto">
      {error.message}
    </div>
    {@debug error}
  {/await}
</section>
