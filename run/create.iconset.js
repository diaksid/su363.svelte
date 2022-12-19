import { promises as fs } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { locate } from '@iconify/json';

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const bundles = [];
  const count = {};

  const iconset = JSON.parse(
    await fs.readFile(resolve(__dirname, '../src/lib/ui/iconfy/iconset.json'), 'utf8')
  );

  const load = async (prefix) => {
    const icons = iconset[prefix];
    const bundle = {
      prefix: prefix,
      icons: {}
    };
    const json = JSON.parse(await fs.readFile(locate(prefix), 'utf8'));
    count[prefix] = 0;
    Object.entries(json.icons).forEach(([key, val]) => {
      if (icons.includes(key)) {
        bundle.icons[key] = val;
        ++count[prefix];
      }
    });
    ['width', 'height'].forEach((key) => {
      const val = json[key] || json.info[key];
      if (val) bundle[key] = val;
    });
    bundles.push(bundle);
  };

  for (const prefix of Object.keys(iconset)) await load(prefix);

  await fs.writeFile(resolve(__dirname, '../src/lib/ui/iconfy/bundles.json'), JSON.stringify(bundles));

  return count;
};

console.log(await create());
