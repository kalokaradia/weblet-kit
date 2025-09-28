# Documentation

## 📦 Installation

Install via [npm](https://www.npmjs.com/package/weblet-kit):

```bash
npm install weblet-kit
```

or you can use it via [CDN](https://unpkg.com/weblet-kit):

```js
import webletKit, {utils, validators} from "https://unpkg.com/weblet-kit";
```

## 🚀 Usage

Import and use any utility you need:

```js
import { validators, utils } from 'weblet-kit';

console.log(validators.isEmail('test@example.com')); // true

const debouncedFn = utils.debounce(() => console.log('Hello!'), 300);
debouncedFn();
```

## 📖 Documentation

For complete documentation, please visit the [Main Documentation](https://kalokaradia.github.io/weblet-kit) page.

## 🤝 Contribution

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a pull request

Please review the [contributing guidelines](CONTRIBUTING.md) before submitting PRs.

## 🐞 Issues

Found a bug or have a feature request?  
Open an issue on the [GitHub Issues page](https://github.com/kalokaradia/weblet-kit/issues).

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

Made with ❤️ by [Kaloka Radia Nanda](https://kalokaradiananda.vercel.app)
