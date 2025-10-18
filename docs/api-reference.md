# API Reference

## Validators

### isEmail()

Check if a string is a valid email address.  
**Signature:** `isEmail(str: unknown): boolean`

**Example:**

```js
validators.isEmail("test@example.com"); // true
validators.isEmail("test@.example.com"); // false
validators.isEmail("test@.example..com"); // false
validators.isEmail("test@example"); // false
validators.isEmail("test@.com"); // false
validators.isEmail("not-an-email"); // false
```

### isURL()

Validate if a string is a valid URL using `new URL()`.  
**Signature:** `isURL(url: unknown): boolean`

**Example:**

```js
validators.isURL("https://example.com"); // true
validators.isURL("not-a-url"); // false
```

### isUUID()

Verify if the string matches UUID v4 format.  
**Signature:** `isUUID(uuid: unknown): boolean`

**Example:**

```js
validators.isUUID("123e4567-e89b-12d3-a456-426614174000"); // true
validators.isUUID("invalid-uuid"); // false
```

### isStrongPassword()

Check if password is at least 8 characters, contains uppercase, lowercase, number, and symbol.  
**Signature:** `isStrongPassword(password: string, options?: StrongPasswordOptions): boolean`

**StrongPasswordOptions:**

| Option             | Type      | Default                                       | Description                                                             |
| ------------------ | --------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| minLength          | `number`  | `8`                                           | Minimum length required for the password.                               |
| maxLength          | `number`  | `128`                                         | Maximum allowed length for the password.                                |
| requireUppercase   | `boolean` | `true`                                        | If `true`, password must contain at least one uppercase letter (`A-Z`). |
| requireLowercase   | `boolean` | `true`                                        | If `true`, password must contain at least one lowercase letter (`a-z`). |
| requireNumber      | `boolean` | `true`                                        | If `true`, password must contain at least one number (`0-9`).           |
| requireSpecialChar | `boolean` | `true`                                        | If `true`, password must contain at least one special character.        |
| specialChars       | `string`  | <p>!@#$%^&\*()\_+-=[]{};':\"\\\| ,.<>/?~`</p> | If is `true`, defines which characters are considered special.          |

**Example:**

```js
// Basic usage with default rules
validators.isStrongPassword("Aa1!aaaa"); // true
validators.isStrongPassword("weakpass"); // false

// Custom rules
validators.isStrongPassword("abc123", {
	minLength: 6,
	requireUppercase: false,
	requireSpecialChar: false,
});
// true (no uppercase or symbol required, length 6+)
```

### isNumber()

Check if the value is of type number and not NaN.  
**Signature:** `isNumber(value: unknown): boolean`

**Example:**

```js
validators.isNumber(123); // true
validators.isNumber("123"); // false
validators.isNumber(NaN); // false
```

### isInteger()

Check if the value is an integer.  
**Signature:** `isInteger(value: unknown): boolean`

**Example:**

```js
validators.isInteger(42); // true
validators.isInteger(3.14); // false
```

### isBoolean()

Check if the value is true/false, including "true"/"false" strings.  
**Signature:** `isBoolean(value: unknown): boolean`

**Example:**

```js
validators.isBoolean(true); // true
validators.isBoolean("false"); // true
validators.isBoolean(1); // false
```

### isDate()

Validate a Date object, date string, or timestamp number.  
**Signature:** `isDate(value: unknowm): boolean`

**Example:**

```js
validators.isDate(new Date()); // true
validators.isDate("2024-06-01"); // true
validators.isDate(1717200000000); // true
validators.isDate("not-a-date"); // false
```

### isEmpty()

Check if value is null, empty string, empty array, or empty object.  
**Signature:** `isEmpty(value: unknown): boolean`

**Example:**

```js
validators.isEmpty(""); // true
validators.isEmpty([]); // true
validators.isEmpty({}); // true
validators.isEmpty("not empty"); // false
```

### isAlphanumeric()

Check if the string contains only letters and numbers.  
**Signature:** `isAlphanumeric(str: unknown): boolean`

**Example:**

```js
validators.isAlphanumeric("abc123"); // true
validators.isAlphanumeric("abc-123"); // false
```

### isAlpha()

Check if a string contains only alphabetic characters (`a–z`, `A–Z`).  
**Signature:** `isAlpha(text: unknown): boolean`

**Example:**

```js
validators.isAlpha("Hello"); // true
validators.isAlpha("Hello123"); // false
validators.isAlpha(""); // false
```

### isNumeric()

Check if a string contains only numeric digits (`0–9`).  
**Signature:** `isNumeric(text: unknown): boolean`

**Example:**

```js
validators.isNumeric("123"); // true
validators.isNumeric("12.3"); // false
validators.isNumeric(""); // false
```

### isHexColor()

Validate a string as a valid hexadecimal color code (`#fff` or `#ffffff`).  
**Signature:** `isHexColor(text: unknown): boolean`

**Example:**

```js
validators.isHexColor("#fff"); // true
validators.isHexColor("#123456"); // true
validators.isHexColor("red"); // false
validators.isHexColor("#GGG"); // false
```

### isJSON()

Check if a string is valid JSON.  
**Signature:** `isJSON(value: unknown): boolean`

**Example:**

```js
validators.isJSON('{"name":"John"}'); // true
validators.isJSON("[1,2,3]"); // true
validators.isJSON("invalid"); // false
validators.isJSON(""); // false
```

### isIP()

Validate an IP address (supports both `IPv4` and `IPv6`).  
**Signature:** `isIP(text: unknown): boolean`

**Example:**

```js
validators.isIP("192.168.1.1"); // true
validators.isIP("2001:0db8::1"); // true
validators.isIP("999.999.999.999"); // false
validators.isIP("not-an-ip"); // false
```

### isDomain()

Check if a string is a valid domain name.  
**Signature:** `isDomain(text: unknown): boolean`

**Example:**

```js
validators.isDomain("example.com"); // true
validators.isDomain("sub.example.co.uk"); // true
validators.isDomain("example"); // false
validators.isDomain(""); // false
```

### isPhoneNumber()

Basic validation for international phone numbers (allows digits, +, spaces, hyphens, and parentheses).  
**Signature:** `isPhoneNumber(text: unknown): boolean`

**Example:**

```js
validators.isPhoneNumber("+1-555-123-4567"); // true
validators.isPhoneNumber("(555) 123-4567"); // true
validators.isPhoneNumber("123"); // false (too short)
validators.isPhoneNumber("abc"); // false
```

### isCreditCard()

Validate a credit card number using the Luhn algorithm.  
**Signature:** `isCreditCard(text: unknown): boolean`

**Example:**

```js
validators.isCreditCard("4532123456789012"); // true (if passes Luhn)
validators.isCreditCard("1234567890123456"); // false (fails Luhn)
validators.isCreditCard(""); // false
```

### isFutureDate()

Check if a date is in the future (relative to current time). Accepts `Date`, ISO string, or timestamp.  
**Signature:** `isFutureDate(date: unknown): boolean`

**Example:**

```js
validators.isFutureDate("2030-01-01"); // true
validators.isFutureDate(new Date(2030, 0)); // true
validators.isFutureDate("2020-01-01"); // false
```

### isPastDate()

Check if a date is in the past (relative to current time). Accepts `Date`, ISO string, or timestamp.  
**Signature:** `isPastDate(date: unknown): boolean`

**Example:**

```js
validators.isPastDate("2020-01-01"); // true
validators.isPastDate(new Date(2020, 0)); // true
validators.isPastDate("2030-01-01"); // false
```

### isDateBefore()

Check if the first date is before the second date. Accepts Date, ISO string, or timestamp for both arguments.  
**Signature:** `isDateBefore(date: unknown, comparisonDate: unknown): boolean`

**Example:**

```js
validators.isDateBefore("2020-01-01", "2021-01-01"); // true
validators.isDateBefore(new Date(2022, 0), "2021-12-31"); // false
```

### isDateAfter()

Check if the first date is after the second date. Accepts `Date`, ISO string, or timestamp for both arguments.  
**Signature:** `isDateAfter(date: unknown, comparisonDate: unknown): boolean`

**Example:**

```js
validators.isDateAfter("2021-01-01", "2020-01-01"); // true
validators.isDateAfter("2020-12-31", new Date(2021, 0)); // false
```

### isBase64()

Validates whether a string is a valid Base64-encoded value.  
**Signature:** `isBase64(str: unknown): boolean`

**Example:**

```js
validators.isBase64("TXkgbmFtZSBpcyBEYXZpZA=="); // true
validators.isBase64("SSBsaWtlIGNvZGluZw=="); // true
validators.isBase64("SSBsaWtlIGNvZGluZw==@"); // false
validators.isBase64("SSBsaWtlIGNvZGluZw==-"); // true
```

### isSlug()

Checks if a string is a valid slug (lowercase, hyphenated, URL-safe).  
**Signature:** `isSlug(str: unknown): boolean`

**Example:**

```js
validators.isSlug("produk-baru-2025"); // true
validators.isSlug("Produk-Besar"); // false (contains uppercase letters)
validators.isSlug("produk_baru"); // false (contains underscore)
validators.isSlug("produk--baru"); // false (contains consecutive hyphens)
validators.isSlug(""); // false (empty)
validators.isSlug("   "); // false (only spaces)
validators.isSlug("produk-123"); // true
```

### isLatitude()

Validates if a number is a valid latitude coordinate (−90 to +90).  
**Signature:** `isLatitude(value: unknown): boolean`

**Example:**

```js
validators.isLatitude(-90); // true
validators.isLatitude(90); // true
validators.isLatitude(91); // false
validators.isLatitude("90"); // false
```

### isLongitude()

Validates if a number is a valid longitude coordinate (−180 to +180).  
**Signature:** `isLongitude(value: unknown): boolean`

**Example:**

```js
validators.isLongitude(-180); // true
validators.isLongitude(180); // true
validators.isLongitude(181); // false
validators.isLongitude("180"); // false
```

### isMimeType()

Checks if a string matches the MIME type format (e.g., image/png, application/json)  
**Signature:** `isMimeType(str: string): boolean`

```js
validators.isMimeType("image/png"); // true
validators.isMimeType("application/json"); // true
validators.isMimeType("video/mp4"); // true
validators.isMimeType("text/html"); // true
validators.isMimeType("x-font-woff2/woff2"); // true
validators.isMimeType("IMAGE/PNG"); // true (case-insensitive)
validators.isMimeType("image/"); // false (subtype is empty)
validators.isMimeType("image/png; charset=utf-8"); // false (there is a parameter)
validators.isMimeType("text/html/extra"); // false (too many slashes)
validators.isMimeType(""); // false
```

## Utils

### formatDate()

Format a date as `YYYY-MM-DD HH:mm:ss`.  
**Signature:** `formatDate(date: Date, format?: string): string`

**Example:**

```js
import { utils } from "weblet-kit";

utils.formatDate(new Date()); // "2024-06-01 12:34:56"
```

### generateRandomId()

Generate a random string (default 16 characters).  
**Signature:** `generateRandomId(length?: number): string`

**Example:**

```js
utils.generateRandomId(); // "a1b2c3d4e5f6g7h8"
utils.generateRandomId(8); // "a1b2c3d4"
```

### capitalize()

Capitalize the first letter of a string.  
**Signature:** `capitalize(text: string): string`

**Example:**

```js
utils.capitalize("hello world"); // "Hello world"
```

### escapeHTML()

Escape special characters into HTML entities.  
**Signature:** `escapeHTML(text: string): string`

**Example:**

```js
utils.escapeHTML("<div>Test & 'quote'</div>"); // "&lt;div&gt;Test &amp; &#39;quote&#39;&lt;/div&gt;"
```

### debounce()

Execute function after it stops being called for a few milliseconds.  
**Signature:** `debounce(fn: Function, delay: number): Function`

**Example:**

```js
const debounced = utils.debounce(() => console.log("Hello!"), 300);
debounced();
```

### throttle()

Limit a function to run only once per interval.  
**Signature:** `throttle(fn: Function, delay: number): Function`

**Example:**

```js
const throttled = utils.throttle(() => console.log("Tick!"), 500);
throttled();
```

### shuffleArray()

Shuffle the elements of an array.  
**Signature:** `shuffleArray(arr: any[]): any[]`

**Example:**

```js
utils.shuffleArray([1, 2, 3, 4]); // [3, 1, 4, 2]
```

### average()

Calculate the average of an array of numbers.  
**Signature:** `average(arr: number[]): number`

**Example:**

```js
utils.average([1, 2, 3, 4]); // 2.5
```

### max()

Return the largest value in an array.  
**Signature:** `arrayMax(arr: number[]): number | undefined`

**Example:**

```js
utils.arrayMax([1, 5, 3]); // 5
```

### arrayMin()

Return the smallest value in an array.  
**Signature:** `arrayMin(arr: number[]): number | undefined`

**Example:**

```js
utils.arrayMin([1, 5, 3]); // 1
```

### sortNumbers()

Sort numbers in ascending order.  
**Signature:** `sortNumbers(arr: number[], order: "asc" | "desc" = "asc"): number[]`

**Example:**

```js
utils.sortNumbers([3, 1, 2]); // [1, 2, 3]
utils.sortNumbers([3, 1, 3], "asc"); // [1, 2, 3]
utils.sortNumbers([3, 1, 3], "desc"); // [3, 2, 1]
```

### isPalindrome()

Check if a text is a palindrome.  
**Signature:** `isPalindrome(text: string): boolean`

**Example:**

```js
utils.isPalindrome("madam"); // true
utils.isPalindrome("hello"); // false
```

### chunkArray()

Split an array into smaller arrays of a given size.  
**Signature**: `chunkArray(array: any[], size: number): any[][]`

**Example:**

```js
utils.chunkArray([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

### deepClone()

Create a deep copy of an object or array.  
**Signature:** `deepClone(value: any): any`

**Example:**

```js
utils.deepClone({ a: 1, b: { c: 2 } }); // { a: 1, b: { c: 2 } }
```

### range()

Generate a sequence of numbers within a range.  
**Signature:** `range(start: number, end: number, step?: number): number[]`

**Example:**

```js
utils.range(1, 5);
// [1, 2, 3, 4]

utils.range(5, 1, -1);
// [5, 4, 3, 2]
```

### flattenArray()

Recursively flattens nested arrays into a single-level array.  
**Signature:** `flattenArray<T>(input: any[]): T[]`

**Example:**

```js
utils.flattenArray([1, [2, [3, 4, [5], 6], 7, 8], 9, 10]); // [1,2,3,4,5,6,7,8,9,10]

utils.flattenArray([1, ["2", [true, false]]]); // [1,"2",true,false]
```

### arrayGroupBy()

Recursively flattens nested arrays into a single-level array.  
**Signature:** `arrayGroupBy<T>(array: T[], key: keyof T): Record<string, T[]>`

**Example:**

```js
utils.arrayGroupBy(
	[
		{ name: "Alice", role: "admin" },
		{ name: "Bob", role: "user" },
		{ name: "Charlie", role: "admin" },
		{ name: "David", role: "user" },
	],
	"role"
);

/* Output:
{
  admin: [
    {
      name: "Alice",
      role: "admin",
    }, {
      name: "Charlie",
      role: "admin",
    }
  ],
  user: [
    {
      name: "Bob",
      role: "user",
    }, {
      name: "David",
      role: "user",
    }
  ],
} */
```

### removeDuplicatesArray()

Removes duplicate values from an array using Set.  
**Signature:** `removeDuplicatesArray<T>(array: T[]): T[]`

**Example:**

```js
utils.removeDuplicatesArray([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]); // [1,2,3,4,5]
```

### clamp()

Restricts a number to stay within a defined range (min to max).  
**Signature:** `clamp(value: number, min: number, max: number): number`

**Example:**

```js
utils.clamp(5, 1, 10); // 5
utils.clamp(0, 1, 10); // 1
utils.clamp(15, 1, 10); // 10
```

### memoize()

Caches function results based on arguments to optimize repeated calls.  
**Signature:** `memoize<T extends (...args: any[]) => any>(fn: T): T`

**Example:**

```js
function expensiveCalc(n: number): number {
	console.log("Calculating...");
	return n * n;
}

const fastCalc = utils.memoize(expensiveCalc);

console.log(fastCalc(5)); // “Calculating...” then 25
console.log(fastCalc(5)); // immediately 25, without “Calculating...”
```
