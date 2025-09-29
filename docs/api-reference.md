# API Reference

## Validators

### isEmail()

Check if a string is a valid email address.  
**Signature:** `isEmail(email: string): boolean`

**Example:**

```js
validators.isEmail("test@example.com"); // true
validators.isEmail("not-an-email"); // false
```

### isURL()

Validate if a string is a valid URL using `new URL()`.  
**Signature:** `isURL(url: string): boolean`

**Example:**

```js
validators.isURL("https://example.com"); // true
validators.isURL("not-a-url"); // false
```

### isUUID()

Verify if the string matches UUID v4 format.  
**Signature:** `isUUID(uuid: string): boolean`

**Example:**

```js
validators.isUUID("123e4567-e89b-12d3-a456-426614174000"); // true
validators.isUUID("invalid-uuid"); // false
```

### isStrongPassword()

Check if password is at least 8 characters, contains uppercase, lowercase, number, and symbol.  
**Signature:** `isStrongPassword(password: string): boolean`

**Example:**

```js
validators.isStrongPassword("Aa1!aaaa"); // true
validators.isStrongPassword("weakpass"); // false
```

### isNumber()

Check if the value is of type number and not NaN.  
**Signature:** `isNumber(value: any): boolean`

**Example:**

```js
validators.isNumber(123); // true
validators.isNumber("123"); // false
validators.isNumber(NaN); // false
```

### isInteger()

Check if the value is an integer.  
**Signature:** `isInteger(value: any): boolean`

**Example:**

```js
validators.isInteger(42); // true
validators.isInteger(3.14); // false
```

### isBoolean()

Check if the value is true/false, including "true"/"false" strings.  
**Signature:** `isBoolean(value: any): boolean`

**Example:**

```js
validators.isBoolean(true); // true
validators.isBoolean("false"); // true
validators.isBoolean(1); // false
```

### isDate()

Validate a Date object, date string, or timestamp number.  
**Signature:** `isDate(value: any): boolean`

**Example:**

```js
validators.isDate(new Date()); // true
validators.isDate("2024-06-01"); // true
validators.isDate(1717200000000); // true
validators.isDate("not-a-date"); // false
```

### isEmpty()

Check if value is null, empty string, empty array, or empty object.  
**Signature:** `isEmpty(value: any): boolean`

**Example:**

```js
validators.isEmpty(""); // true
validators.isEmpty([]); // true
validators.isEmpty({}); // true
validators.isEmpty("not empty"); // false
```

### isAlphanumeric()

Check if the string contains only letters and numbers.  
**Signature:** `isAlphanumeric(value: string): boolean`

**Example:**

```js
validators.isAlphanumeric("abc123"); // true
validators.isAlphanumeric("abc-123"); // false
```

### isAlpha()

Check if a string contains only alphabetic characters (`a–z`, `A–Z`).  
**Signature:** `isAlpha(text: string): boolean`

**Example:**

```js
validators.isAlpha('Hello');     // true
validators.isAlpha('Hello123');  // false
validators.isAlpha('');          // false
```

### isNumeric()

Check if a string contains only numeric digits (`0–9`).  
**Signature:** `isNumeric(text: string): boolean`

**Example:**

```js
validators.isNumeric('123');     // true
validators.isNumeric('12.3');    // false
validators.isNumeric('');        // false
```

### isHexColor()

Validate a string as a valid hexadecimal color code (`#fff` or `#ffffff`).  
**Signature:** `isHexColor(text: string): boolean`

**Example:**

```js
validators.isHexColor('#fff');      // true
validators.isHexColor('#123456');   // true
validators.isHexColor('red');       // false
validators.isHexColor('#GGG');      // false
```

### isJSON()

Check if a string is valid JSON.  
**Signature:** `isJSON(value: string): boolean`

**Example:**

```js
validators.isJSON('{"name":"John"}');  // true
validators.isJSON('[1,2,3]');         // true
validators.isJSON('invalid');         // false
validators.isJSON('');                // false
```

### isIP()

Validate an IP address (supports both `IPv4` and `IPv6`).  
**Signature:** `isIP(text: string): boolean`

**Example:**

```js
validators.isIP('192.168.1.1');        // true
validators.isIP('2001:0db8::1');       // true
validators.isIP('999.999.999.999');    // false
validators.isIP('not-an-ip');          // false
```

### isDomain()

Check if a string is a valid domain name.  
**Signature:** `isDomain(text: string): boolean`

**Example:**

```js
validators.isDomain('example.com');        // true
validators.isDomain('sub.example.co.uk');  // true
validators.isDomain('example');            // false
validators.isDomain('');                   // false
```

### isPhoneNumber()

Basic validation for international phone numbers (allows digits, +, spaces, hyphens, and parentheses).  
**Signature:** `isPhoneNumber(text: string): boolean`

**Example:**

```js
validators.isPhoneNumber('+1-555-123-4567');  // true
validators.isPhoneNumber('(555) 123-4567');   // true
validators.isPhoneNumber('123');              // false (too short)
validators.isPhoneNumber('abc');              // false
```

### isCreditCard()

Validate a credit card number using the Luhn algorithm.  
**Signature:** `isCreditCard(text: string): boolean`

**Example:**

```js
validators.isCreditCard('4532123456789012');  // true (if passes Luhn)
validators.isCreditCard('1234567890123456');  // false (fails Luhn)
validators.isCreditCard('');                  // false
```

### isFutureDate()

Check if a date is in the future (relative to current time). Accepts `Date`, ISO string, or timestamp.  
**Signature:** `isFutureDate(date: string | number | Date): boolean`

**Example:**

```js
validators.isFutureDate('2030-01-01');     // true
validators.isFutureDate(new Date(2030, 0)); // true
validators.isFutureDate('2020-01-01');     // false
```

### isPastDate()

Check if a date is in the past (relative to current time). Accepts `Date`, ISO string, or timestamp.  
**Signature:** `isPastDate(date: string | number | Date): boolean`

**Example:**

```js
validators.isPastDate('2020-01-01');     // true
validators.isPastDate(new Date(2020, 0)); // true
validators.isPastDate('2030-01-01');     // false
```

### isBefore()

Check if the first date is before the second date. Accepts Date, ISO string, or timestamp for both arguments.  
**Signature:** `isBefore(date: string | number | Date, comparisonDate: string | number | Date): boolean`

**Example:**

```js
validators.isBefore('2020-01-01', '2021-01-01');  // true
validators.isBefore(new Date(2022, 0), '2021-12-31'); // false
```

### isAfter()

Check if the first date is after the second date. Accepts `Date`, ISO string, or timestamp for both arguments.
**Signature:** `isAfter(date: string | number | Date, comparisonDate: string | number | Date): boolean`

**Example:**

```js
validators.isAfter('2021-01-01', '2020-01-01');  // true
validators.isAfter('2020-12-31', new Date(2021, 0)); // false
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
**Signature:** `max(arr: number[]): number | undefined`

**Example:**

```js
utils.max([1, 5, 3]); // 5
```

### min()

Return the smallest value in an array.  
**Signature:** `min(arr: number[]): number | undefined`

**Example:**

```js
utils.min([1, 5, 3]); // 1
```

### sortNumbers()

Sort numbers in ascending order.  
**Signature:** `sortNumbers(arr: number[]): number[]`

**Example:**

```js
utils.sortNumbers([3, 1, 2]); // [1, 2, 3]
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
utils.chunkArray([1, 2, 3, 4, 5], 2); 
// [[1, 2], [3, 4], [5]]
```

### deepClone()

Create a deep copy of an object or array.  
**Signature:** `deepClone(value: any): any`

**Example:**

```js
const obj = { a: 1, b: { c: 2 } };
const copy = utils.deepClone(obj);

console.log(copy); 
// { a: 1, b: { c: 2 } }
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
