//import fm from 'front-matter';
import fs from 'fs';
import path from 'path';

import 'dotenv/config';

const disallow = ['admin', 'search'];

//const __dirname = process.cwd();
//const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json'), 'utf8'));
const siteUrl = new URL(process.env.VITE_APP_CANONICAL || '.').origin;
const sitemapFile = path.resolve(process.cwd(), 'static/sitemap.xml');

const PAGE_PRIORITY = 0.7;
const PAGE_CHANGEFREG = 'weekly'; // daily weekly monthly
const POST_PRIORITY = 0.7;
const POST_CHANGEFREG = 'daily'; // daily weekly monthly
const TIMESTAMP = new Date().toISOString();

const getPages = (location) =>
  fs.readdirSync(location).reduce(
    (accumulator, currentValue) => {
      if (path.extname(currentValue) === '' && disallow.indexOf(currentValue) === -1) {
        console.log(currentValue);
        accumulator.push(`${siteUrl}/${currentValue}`);
      }
      return accumulator;
    },
    [siteUrl]
  );

/*
export const getPosts = (location) => {
  const directories = fs
    .readdirSync(location)
    .filter((element) => fs.lstatSync(`${location}/${element}`).isDirectory());
  const articles = [];

  directories.forEach((element) => {
    const contentPath = `${location}/${element}/index.md`;
    if (fs.existsSync(contentPath)) {
      const content = fs.readFileSync(contentPath, { encoding: 'utf-8' });
      const frontmatter = fm(content);
      const { lastUpdated } = frontmatter.attributes;

      articles.push({ slug: element, lastUpdated });
    }
  });
  return articles;
};
*/

const render = (pages, posts) =>
  `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (element) => `
  <url>
    <loc>${element}</loc>
    <lastmod>${`${TIMESTAMP}`}</lastmod>
    <changefreq>${PAGE_CHANGEFREG}</changefreq>
    <priority>${PAGE_PRIORITY}</priority>
  </url>`
  )
  .join('')}
${posts
  .map((element) => {
    const { lastUpdated, slug } = element;
    return `
  <url>
      <loc>${siteUrl}/${slug}/</loc>
      <lastmod>${`${lastUpdated}`}</lastmod>
      <changefreq>${POST_CHANGEFREG}</changefreq>
      <priority>${POST_PRIORITY}</priority>
    </url>`;
  })
  .join('')}
</urlset>`
    .trim()
    .replace(/\s{2,}/g, ' ')
    .replace(/> </g, '><')
    .replace(/\n/g, '');

//const location = path.join(__dirname, BLOG_PATH);
const pages = getPages('src/routes');
const posts = []; // getPosts(location)

fs.writeFileSync(sitemapFile, render(pages, posts));
