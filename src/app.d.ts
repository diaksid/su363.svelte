// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    userid: string;
  }
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

interface MenuItem {
  label: string;
  title?: string;
  handle?: (event?: Event) => void;
}

interface NavLink extends MenuItem {
  href: string;
  links?: NavLink[];
}

declare module '*?webp' {
  const value: any;
  export = value;
}

declare module '*&webp' {
  const value: any;
  export = value;
}

declare module '*?avif' {
  const value: any;
  export = value;
}

declare module '*&avif' {
  const value: any;
  export = value;
}

declare module '*.gif' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}

declare module '*.jpeg' {
  const value: any;
  export = value;
}

declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.webp' {
  const value: any;
  export = value;
}

declare module '*.avif' {
  const value: any;
  export = value;
}
