# weblet-kit documentation

Astro Starlight site for the `weblet-kit` package.

## Local development

Run these commands from `docs/`:

```sh
npm install
npm run dev
```

Astro serves the site at `http://localhost:4321`. Create a production build with `npm run build` and inspect it locally with `npm run preview`.

The package API reference is based on the root exports from `../src/index.ts`. Keep the API pages in `src/content/docs/api/` aligned with those exports when the library changes.
