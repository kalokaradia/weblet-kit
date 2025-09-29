# Getting Started

## Installation

Install via [npm](https://www.npmjs.com/package/weblet-kit):

```bash
npm install weblet-kit
```

Or use it via CDN:

```js
import webletKit, { utils, validators } from "https://unpkg.com/weblet-kit";
```

## Example

Import and use any utility you need:

```js
import { validators, utils } from "weblet-kit";

console.log(validators.isEmail("test@example.com")); // true

const debouncedFn = utils.debounce(() => console.log("Hello!"), 300);
debouncedFn();
```
