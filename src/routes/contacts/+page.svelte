<script lang="ts">
  import { YandexMetrikaHit, YandexMap } from 'daks-svelte';
  import { Envelope, MapPin, PhoneArrowUpRight } from 'svelte-heros-v2';

  const canonical = new URL(import.meta.env.VITE_APP_CANONICAL).origin;

  import microdata from '$lib/configs/microdata';
  const { itemtype, name, logo, email, telephone, address } = microdata.organization;

  const title = 'СУ 363 • Контакты';
  const description = 'Контакты Строительного Управления № 363';

  const data = {
    locations: [
      {
        geometry: [55.646035, 37.666438],
        properties: {
          iconContent: '<strong class="tracking-wider">СУ 363</strong>',
          balloonContentHeader: 'Строительное Управление № 363',
          balloonContentBody:
            '<img class=mx-auto src=/assets/images/ymap.webp width=192 height=192 />',
          balloonContentFooter:
            '<div class=text-center>время работы: 9 <sup>00</sup> -- 19 <sup>00</sup></div>'
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: [55.646035, 37.666438],
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    }
  };
</script>

<YandexMetrikaHit
  {title}
  {description} />

  <main
  class="justify-between min-h-screen"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <div
    class="content py-4
           flex flex-col justify-between gap-7
           text-base md:text-lg lg:text-xl text-sky-800 dark:text-sky-200 align-middle"
    itemscope
    {itemtype}>
    <a
      class="hover:text-sky-500"
      href="tel://{telephone.replace(/[\s-()]/g, '')}">
      <PhoneArrowUpRight
        class="inline -mt-0.5 mr-2"
        size="24" />
      <span itemprop="telephone">{telephone}</span>
    </a>
    <a
      class="hover:text-sky-500"
      href="mailto:{email}">
      <Envelope
        class="inline -mt-0.5 mr-2"
        size="24" />
      <span itemprop="email">{email}</span>
    </a>
    <div
      style:display="contents"
      itemprop="address"
      itemscope
      itemtype={address.itemtype}>
      <a
        rel="nofollow noreferrer"
        class="hover:text-sky-500"
        href={address.url}
        target="_blank"
        itemprop="url">
        <MapPin
          class="inline -mt-0.5 mr-2"
          size="24" />
        <span itemprop="postalCode">{address.postalCode}</span>,
        <span itemprop="addressLocality">{address.addressLocality}</span>,
        <span itemprop="streetAddress">{@html address.streetAddress}</span>
      </a>
      <meta
        itemprop="addressRegion"
        content={address.addressRegion} />
    </div>
    <meta
      itemprop="name"
      content={name} />
    <link
      itemprop="logo"
      href={`${canonical}${logo}`} />
  </div>

  <YandexMap {data} />
</main>
