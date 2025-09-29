# WEBLET-KIT

> Tiny tools, big impact.

A minimal JavaScript utility toolkit that gives you the essentials — fast, modular, and zero-dependency.

## Why Weblet-Kit?

- ✅ Zero dependencies
- 📦 Simple and modular utilities
- 🧑‍💻 Developer-friendly API
- ⚡ Optimized and lightweight (ESM support)
- 🔧 Includes validators and common helpers
- 🛠️ Easily extendable for custom use cases
- 🏷️ Well-documented functions for quick onboarding

## Quick Install

Install via [npm](https://www.npmjs.com/package/weblet-kit):

```bash
npm install weblet-kit
```

or drop straight from CDN:

```js
import webletKit, {utils, validators} from "https://unpkg.com/weblet-kit";
```

## Example

Import and use any utility you need:

```js
import { validators, utils } from "weblet-kit";

console.log(validators.isEmail("test@example.com")); // true

const debouncedFn = utils.debounce(() => console.log("Ping!"), 300);
debouncedFn();
```

## Contribute

We love contributions. PRs and issues welcome!

[Contributing Guide](https://github.com/kalokaradia/weblet-kit/blob/main/CONTRIBUTING.md)

## Issues

Found a bug or have a feature request?  
Open an issue on the [GitHub Issues page](https://github.com/kalokaradia/weblet-kit/issues).

## License

MIT. Use it, remix it, ship it.

[MIT License](https://github.com/kalokaradia/weblet-kit/blob/main/LICENSE).

---

Made with ❤️ by [Kaloka Radia Nanda](https://kalokaradiananda.vercel.app)
