# 🕸️ WEBLET KIT

> 🧰 A lightweight JavaScript utility toolkit packed with handy validators and everyday helpers.
> Modular, dependency-free, and developer-first.
> Perfect for rapid development, code cleanliness, and boosting productivity in any JavaScript project.

## ✨ Features

- ✅ Zero dependencies
- 📦 Simple and modular utilities
- 🧑‍💻 Developer-friendly API
- ⚡ Optimized and lightweight (ESM support)
- 🔧 Includes validators and common helpers
- 🛠️ Easily extendable for custom use cases
- 🏷️ Well-documented functions for quick onboarding

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

## 📝 Documentation

### 🔍 Validators

Helpers for quick data validation.

#### `isEmail(value: string): boolean`

Checks if a string is a valid email.

```js
validators.isEmail('test@example.com'); // true
validators.isEmail('invalid@'); // false
```

---

#### `isURL(value: string): boolean`

Checks if a string is a valid URL.

```js
validators.isURL('https://weblet.dev'); // true
validators.isURL('notaurl'); // false
```

---

#### `isUUID(value: string): boolean`

Validates if a string matches UUID v1–v5 format.

```js
validators.isUUID('123e4567-e89b-12d3-a456-426614174000'); // true
```

---

#### `isStrongPassword(value: string): boolean`

Checks password strength:

- Minimum 8 characters
- At least 1 uppercase, 1 lowercase, 1 number, 1 special character

```js
validators.isStrongPassword('P@ssword123'); // true
validators.isStrongPassword('weak'); // false
```

---

### 🛠️ Utils

Common helper functions.

#### `formatDate(date: Date, format = "YYYY-MM-DD"): string`

Formats a `Date` object into a custom format.
Supported tokens: `YYYY`, `MM`, `DD`, `HH`, `mm`, `ss`.

```js
utils.formatDate(new Date(), "YYYY/MM/DD HH:mm"); 
// "2025/09/10 19:30"
```

---

#### `generateRandomId(length = 16): string`

Generates a random alphanumeric string.

```js
utils.generateRandomId(); 
// "aZ8k3Lm9XyPq1Rt2"
```

---

#### `capitalize(text: string): string`

Capitalizes the first letter of a string.

```js
utils.capitalize('hello world'); 
// "Hello world"
```

---

#### `escapeHTML(text: string): string`

Escapes HTML special characters to prevent XSS.

```js
utils.escapeHTML('<script>alert("x")</script>');
// "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;"
```

---

#### `debounce(fn: Function, delay: number): Function`

Delays function execution until no calls occur for the given delay.

```js
const debouncedLog = utils.debounce(() => console.log('Debounced!'), 500);
window.addEventListener('resize', debouncedLog);
```

---

#### `throttle(fn: Function, limit: number): Function`

Ensures a function is only executed once per time interval.

```js
const throttledScroll = utils.throttle(() => console.log('Scroll!'), 1000);
window.addEventListener('scroll', throttledScroll);
```

---

### 📦 Namespaced Import

You can import the namespaces if preferred:

```js
import { validators, utils } from 'weblet-kit';

validators.isEmail('dev@example.com');
utils.generateRandomId(12);
```

You can also load Weblet Kit directly in the browser using a CDN.
Make sure to use type="module" so that ESM imports work:

```js
import { validators, utils } from "https://unpkg.com/weblet-kit@1.0.0/dist/weblet-kit.min.mjs";

console.log(validators.isEmail("dev@example.com"));         // true
console.log(validators.isStrongPassword("P@ssword123"));    // true
console.log(utils.generateRandomId(12));                    // e.g. "aZ3kLm9xPqRt"
```

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

Made with ❤️ by [Kaloka Radia Nanda](https://kalokaradiananda.my.id)
