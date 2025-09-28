# 📖 Documentation

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

### 🔍 Validators

- **isEmail(email: string): boolean**
✅ Check if the string is a valid email.

- **isURL(url: string): boolean**
🌐 Validate URL using new URL().

- **isUUID(uuid: string): boolean**
🆔 Verify if the string matches UUID v4 format.

- **isStrongPassword(password: string): boolean**
🔒 Password must be ≥8 characters with uppercase, lowercase, number, and symbol.

- **isNumber(value: any): boolean**
🔢 Check if the value is of type number and not NaN.

- **isInteger(value: any): boolean**
🧮 Check if the value is an integer.

- **isBoolean(value: any): boolean**
⚖️ Check if the value is true/false (including "true" / "false" strings).

- **isDate(value: any): boolean**
📅 Validate a Date object, date string, or timestamp number.

- **isEmpty(value: any): boolean**
🕳️ Check if null, empty string, empty array, or empty object.

- **isAlphanumeric(value: string): boolean**
🔡 Check if the string contains only letters and numbers.

### 🛠️ Utils

- **formatDate(date: Date, format?: string): string**
⏰ Format date (YYYY-MM-DD HH:mm:ss).

- **generateRandomId(length?: number): string**
🎲 Generate a random string (default 16 characters).

- **capitalize(text: string): string**
✨ Capitalize the first letter.

- **escapeHTML(text: string): string**
🛡️ Escape special characters into HTML entities.

- **debounce(fn: Function, delay: number): Function**
⏳ Execute function after it stops being called for a few ms.

- **throttle(fn: Function, delay: number): Function**
🚦 Limit a function to run only once per interval.

- **shuffleArray(arr: any[]): any[]**
🔀 Shuffle the elements of an array.

- **average(arr: number[]): number**
➗ Calculate the average of an array of numbers.

- **max(arr: number[]): number | undefined**
📈 Return the largest value.

- **min(arr: number[]): number | undefined**
📉 Return the smallest value.

- **sortNumbers(arr: number[]): number[]**
📊 Sort numbers in ascending order.

- **isPalindrome(text: string): boolean**
🔄 Check if a text is a palindrome.
