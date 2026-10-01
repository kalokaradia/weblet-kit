import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Weblet-Kit',
      favicon: '/favicon.svg',
      description: 'Toolkit utilitas JavaScript dan TypeScript yang ringan tanpa dependensi runtime.',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kalokaradia/weblet-kit' }],
      customCss: [fileURLToPath(new URL('./src/styles/custom.css', import.meta.url))],
      sidebar: [
        { label: 'Start here', items: [{ label: 'Overview', slug: 'index' }, { label: 'Installation', slug: 'installation' }, { label: 'Getting started', slug: 'getting-started' }, { label: 'Usage', slug: 'usage' }] },
        { label: 'Guides', items: [{ label: 'TypeScript', slug: 'typescript' }, { label: 'Examples and recipes', slug: 'examples' }] },
        { label: 'API reference', items: [
          { label: 'Overview', slug: 'api' },
          { label: 'Array', slug: 'api/array' },
          { label: 'Object', slug: 'api/object' },
          { label: 'String and text', slug: 'api/string' },
          { label: 'Date', slug: 'api/date' },
          { label: 'Number and random', slug: 'api/number' },
          { label: 'Function utilities', slug: 'api/functions' },
          { label: 'Validators', slug: 'api/validators' },
        ] },
        { label: 'Project', items: [{ label: 'Releases', slug: 'releases' }] },
      ],
    }),
  ],
});
