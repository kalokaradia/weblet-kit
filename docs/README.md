# <div style="display:flex;align-items:center; gap: 12px;"><img src="./weblet-kit.svg" style="width: 24px; height: 24px;" /> <span>WEBLET-KIT</span></div>

> **Tiny tools, big impact.**  
> A minimal JavaScript utility toolkit that gives you the essentials — fast, modular, and zero-dependency.

<p align="center">
  <a href="https://www.npmjs.com/package/weblet-kit"><img src="https://img.shields.io/badge/Weblet-Kit-blue?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMDQuOTU1IDcxQzIwOS4xOCA3MSAyMTIuOTQ5IDczLjY1NTIgMjE0LjM3MiA3Ny42MzM1TDI1MC4zMDEgMTc4LjEzTDE2NC4yMTcgNDE4LjkxMkMxNjEuMDU1IDQyNy43NTcgMTQ4LjU0NyA0MjcuNzU3IDE0NS4zODQgNDE4LjkxMkwyNS43Nzg3IDg0LjM2NjVDMjMuNDUwMiA3Ny44NTM1IDI4LjI3ODMgNzEgMzUuMTk1MSA3MUgyMDQuOTU1Wk00NjUuNDA3IDcxQzQ3Mi4zMjMgNzEgNDc3LjE1MSA3Ny44NTM1IDQ3NC44MjMgODQuMzY2NUwzNTUuMjE3IDQxOC45MTJDMzUyLjA1NSA0MjcuNzU3IDMzOS41NDcgNDI3Ljc1NyAzMzYuMzg0IDQxOC45MTJMMjUwLjMwMSAxNzguMTNMMjg2LjIzIDc3LjYzMzVDMjg3LjY1MiA3My42NTUyIDI5MS40MjEgNzEgMjk1LjY0NiA3MUg0NjUuNDA3WiIgZmlsbD0iIzA2QjZENCIvPgo8L3N2Zz4K" alt="npm version"></a>

  <a href="https://www.npmjs.com/package/weblet-kit">
    <img src="https://img.shields.io/npm/v/weblet-kit?label=version&color=orange" alt="npm version">
  </a>
  <a href="https://github.com/kalokaradia/weblet-kit/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green" alt="license"></a>
  <a href="https://bundlephobia.com/package/weblet-kit"><img src="https://img.shields.io/bundlephobia/minzip/weblet-kit?label=size&color=ff69b4" alt="bundle size"></a>
  <a href="https://www.codefactor.io/repository/github/kalokaradia/weblet-kit">
  <img src="https://www.codefactor.io/repository/github/kalokaradia/weblet-kit/badge" alt="CodeFactor Grade">
  </a>

</p>

---

## 🌟 Why Weblet-Kit?

| Feature                       | Description                             |
| ----------------------------- | --------------------------------------- |
| ⚙️ **Zero Dependencies**      | No external packages. Pure and fast.    |
| 📦 **Modular Utilities**      | Import only what you need.              |
| ⚡ **Optimized ESM Build**    | Lightning-fast and tree-shakable.       |
| 🧑‍💻 **Developer-Friendly API** | Clean naming, intuitive methods.        |
| 🛠️ **Validators + Helpers**   | Ready-to-use functions for any project. |
| 🧩 **Extendable Design**      | Add your own modules easily.            |
| 📚 **Well-Documented**        | Clear examples and explanations.        |

---

## 🚀 Quick Start

### Install

```bash
npm install weblet-kit
```

or load from CDN:

```js
import webletKit, {
	utils,
	validators,
} from "https://unpkg.com/weblet-kit@2.0.0/dist/weblet-kit.min.js";
```

---

## ⚡ Example

```js
import { validators, utils } from "weblet-kit";

console.log(validators.isEmail("test@example.com")); // true

const debounced = utils.debounce(() => console.log("Ping!"), 300);
debounced();
```

---

## 💡 Contributing

We love contributions!
See the Contributing Guide
for setup and workflow.

Open issues or PRs on the
👉 [GitHub Issues page](https://github.com/kalokaradia/weblet-kit/issues)

---

## ⚖️ License

Released under the [MIT License](https://github.com/kalokaradia/weblet-kit/blob/main/LICENSE).

---

<p align="center"> Made with ❤️ by <a href="https://kalokaradiananda.vercel.app">Kaloka Radia Nanda</a><br/> <sub>Weblet-Kit — Tiny tools, big impact..</sub> </p>
