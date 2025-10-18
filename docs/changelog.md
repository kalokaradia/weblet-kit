# Changelog

All notable changes to **Weblet-Kit** will be documented in this file.  
This project adheres to Semantic Versioning.

---

## [2.1.0] - 2025-10-12

### Added

#### Validators

-   `isBase64` → Validates whether a string is a valid Base64-encoded value.
-   `isSlug` → Checks if a string is a valid slug (lowercase, hyphenated, URL-safe).
-   `isLatitude` → Validates if a number is a valid latitude coordinate (−90 to +90).
-   `isLongitude` → Validates if a number is a valid longitude coordinate (−180 to +180).
-   `isMimeType` → Checks if a string matches the MIME type format (e.g., image/png, application/json).

#### Utils

-   `flattenArray` → Recursively flattens nested arrays into a single-level array.
-   `arrayGroupBy` → Groups array items by a specified object key.
-   `removeDuplicatesArray` → Removes duplicate values from an array using Set.
-   `clamp` → Restricts a number to stay within a defined range (min to max).
-   `memoize` → Caches function results based on arguments to optimize repeated calls.

### Changed / Improved

-   `isEmail` Improved

Enhanced validation logic for isEmail to improve accuracy and security:

```js
export function isEmail(str: unknown): boolean {
	if (typeof str !== "string") return false;

	const input = str.trim();
	if (/[\x00-\x1F\x7F\u200B-\u200D\uFEFF]/.test(input)) return false;

	const emailRegex =
		/^(?=.{1,254}$)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[A-Za-z]{2,}$/;

	if (!emailRegex.test(input)) return false;

	const domain = input.split("@")[1];
	if (domain && /[\u0400-\u04FF\u0370-\u03FF]/.test(domain)) return false;

	return true;
}
```

-   `isURL` Improved

Adding more URLs that we consider valid:

```js
const validProtocols = new Set([
	"http:",
	"https:",
	"ftp:",
	"ftps:",
	"sftp:",
	"smtp:",
	"imap:",
	"pop3:",
	"ssh:",
	"telnet:",
	"ws:",
	"wss:",
	"rtsp:",
	"mms:",
	"file:",
	"data:",
	"blob:",
	"mailto:",
	"news:",
	"gopher:",
	"irc:",
	"magnet:",
	"bitcoin:",
	"ipfs:",
	"dns:",
	"tcp:",
	"udp:",
	"vpn:",
	"chrome:",
	"chrome-extension:",
	"android-app:",
	"intent:",
	"market:",
	"webcal:",
	"rlogin:",
	"ldap:",
	"git:",
	"svn:",
	"jdbc:",
	"jdbc:mysql:",
	"jdbc:postgresql:",
	"jdbc:oracle:",
	"jdbc:sqlserver:",
	"nfs:",
	"smb:",
	"tel:",
	"fax:",
	"geo:",
	"skype:",
	"spotify:",
	"zoom:",
]);
```

## [2.0.0] - 2025-10-05

### Major Update

This release introduces several API naming improvements, enhanced flexibility, and TypeScript-first support.
Breaking changes are included — update your imports accordingly.

### Added

-   Full TypeScript Support
-   Added `.d.ts` type declaration files for complete TypeScript integration.

#### Validators

-   `isEmail` → Updated with a more realistic regex pattern.

-   -   Note: regex validation alone can’t fully verify deliverability. External API validation recommended.

-   `isURL` → Improved using `URL.canParse()` for safer and faster URL validation.

-   `isStrongPassword` → Now accepts an optional options parameter for more flexible validation:

-   -   ```ts
        {
            minLength?: number;
            maxLength?: number;
            requireUppercase?: boolean;
            requireLowercase?: boolean;
            requireNumber?: boolean;
            requireSpecialChar?: boolean;
            specialChars?: string;
        }
        ```

-   -   Allows custom password rules and character sets.
-   `isDateBefore` (renamed from `isBefore`) → Clearer and more descriptive function name.
-   `isDateAfter` (renamed from `isAfter`) → Consistent naming with `isDateBefore`.
-   `isEmpty` → Now correctly handles Set and Map objects.

#### Utils

-   `arrayMax` (renamed from `max`) → Returns the largest number in an array.
-   `arrayMin` (renamed from `min`) → Returns the smallest number in an array.

### Changed / Improved

-   All validator and utility function names reviewed for clarity and consistency.
-   Codebase modernized to follow strict TypeScript typings.
-   Internal date normalization functions improved for better accuracy across browsers.

### Breaking Changes

-   `isBefore` → Renamed to `isDateBefore`
-   `isAfter` → Renamed to `isDateAfter`
-   `max` → Renamed to `arrayMax`
-   `min` → Renamed to `arrayMin`
-   `isStrongPassword` → Now requires new option structure (see above).
-   Make sure to update imports and references before upgrading.

### Build & Distribution

-   Removed ESM build configuration — Weblet-Kit now focuses purely on TypeScript source distribution.
-   Simpler setup: no longer requires `esbuild` or ESM bundling.
-   Designed for direct import in TypeScript or modern Node.js environments.

**Summary**

Weblet-Kit 2.0.0 marks the transition from a minimal JS utility kit to a robust, TypeScript-friendly foundation for modern development.

Zero dependencies and crafted for precision.

---

## [1.2.0] - 2025-09-29

### Added

#### Validators

-   `isAlpha` → Checks if a string contains only alphabetic characters (a–z, A–Z).
-   `isNumeric` → Checks if a string contains only numeric digits (0–9).
-   `isHexColor` → Checks if a string is a valid hex color code (e.g., `#fff`, `#ffffff`).
-   `isJSON` → Checks if a string is valid JSON that can be parsed.
-   `isIP` → Checks if a string is a valid IP address (IPv4 or IPv6).
-   `isDomain` → Checks if a string is a valid domain name (e.g., `example.com`).
-   `isPhoneNumber` → Checks if a string matches a phone number pattern (basic regex, region-agnostic).
-   `isCreditCard` → Checks if a string is a valid credit card number using the Luhn algorithm.
-   `isFutureDate` → Checks if a given date is in the future.
-   `isPastDate` → Checks if a given date is in the past.
-   `isBefore` → Checks if one date occurs before another date.
-   `isAfter` → Checks if one date occurs after another date.

#### Utils

-   `chunkArray` → Splits an array into smaller chunks of a specified size.
-   `deepClone` → Creates a deep copy of an object/array, fully independent of the original.
-   `range` → Generates an array of numbers between a start and end value, with an optional step.

---

## [1.1.0] - 2025-09-28

### Added

#### Validators

-   `isNumber` → Checks if a value is a valid number (excluding `NaN`).
-   `isInteger` → Validates whether a value is an integer.
-   `isBoolean` → Returns `true` if the value is a boolean type or the string `"true"`/`"false"`.
-   `isDate` → Validates if a value is a valid `Date` object, a date string, or a timestamp.
-   `isEmpty` → Checks if the value is empty. Works for `null`, `undefined`, empty strings, arrays, or objects with no keys.
-   `isAlphanumeric` → Validates if a string only contains letters and numbers (`a-z`, `A-Z`, `0-9`).

#### Utils

-   `shuffleArray` → Randomly shuffles the elements of an array.
-   `average` → Returns the average value of a numeric array.
-   `max` → Returns the maximum value from a numeric array.
-   `min` → Returns the minimum value from a numeric array.
-   `sortNumbers` → Sorts an array of numbers in ascending order.
-   `isPalindrome` → Checks if a string is a palindrome (ignores case and non-alphanumeric characters).

---

## [1.0.0] - 2025-09-08

### Initial Release

#### Validators

-   `isEmail` → Validate email addresses.
-   `isURL` → Check if a string is a valid URL.
-   `isUUID` → Validate UUID v1–v5.
-   `isStrongPassword` → Check password strength (length, uppercase/lowercase, digits, symbols).

#### Utils

-   `formatDate` → Format dates with flexible patterns (YYYY-MM-DD HHmmss).
-   `generateRandomId` → Generate alphanumeric random IDs (default 16 chars).
-   `capitalize` → Capitalize the first letter of a string.
-   `escapeHTML` → Escape dangerous characters (< > & " ') for safe HTML output.
-   `debounce` → Delay function execution until inactivity.
-   `throttle` → Limit function execution to a fixed interval.

Distributed as **zero-dependency**, **ESM-ready** JavaScript toolkit.
Available via `npm` and `unpkg` CDN.
