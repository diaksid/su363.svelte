/// <reference types="@sveltejs/kit" />

import type { ILazyLoadInstance } from 'vanilla-lazyload';

declare global {
  type Timeout = string | number | NodeJS.Timeout | undefined;

  interface Document {
    lazyloadInstance: ILazyLoadInstance;
  }

  //declare const __APP_VERSION__: string;

  declare let Ya: any;
  declare let ymaps: any;
  declare let ym: any;
}
